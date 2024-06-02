import { MultiElo } from "multi-elo";
import { prisma } from "../../context";

export type ShooterId = number;
export type ShooterRank = number;
export type Elo = number;

export type ShooterElo = Record<ShooterId, Elo>;

export function calculateElo(shooterElos: ShooterElo[], ranks: ShooterRank[]): ShooterElo[] {
	const elo = new MultiElo({ k: 64, d: 800, verbose: false});

	const elos = shooterElos.map((elo) => {
		return elo[1];
	});

	const newElos = elo.getNewRatings(elos, ranks);

	return newElos.map((elo, index) => {
		return [shooterElos[index][0], elo];
	});
}


export async function updateElo(/* scorelistId: number, round: number */) {
	const scores = await prisma.score.findMany({
		where: {
			// scorelistId: scorelistId,
			// round: round,
			state: {
				notIn: ["DidNotScore"],
			},
		},
		select: {
			shooterId: true,
			hitFactor: true,
		},
	});
	if (scores.length > 1) {
		const sumOfHitFactors: typeof scores = [];

		for (const score of scores) {
			const dubplicatedScore = sumOfHitFactors.findIndex((s) => s.shooterId === score.shooterId);
			if (dubplicatedScore > -1) {
				sumOfHitFactors[dubplicatedScore].hitFactor += score.hitFactor;
			} else {
				sumOfHitFactors.push(score);
			}
		}
		const orderedScores: Record<ShooterId, ShooterRank>[] = sumOfHitFactors.sort((a, b) => b.hitFactor - a.hitFactor).map((score, i) => [score.shooterId, i + 1]);
		const elos: ShooterElo[] = [];
		for (const i in orderedScores) {
			const shooterElo = await prisma.elo.findFirst({
				where: {
					shooterId: orderedScores[i][0],
				},
				orderBy: {
					createAt: "desc",
				},
			});
			elos.push([orderedScores[i][0], shooterElo?.elo || parseInt(process.env.INIT_ELO || "1000")]);
		}
		const ranks = orderedScores.map((score, i) => i + 1);
		const newElos = calculateElo(elos, ranks);
		const currentTick = (await prisma.elo.findFirst({
			orderBy: {
				tick: "desc",
			},
			select: {
				tick: true,
			},
		}))?.tick || 0;
		for (const i in newElos) {
			await prisma.elo.create({
				data: {
					tick: currentTick + 1,
					elo: newElos[i][1],
					shooter: {
						connect: {
							id:  newElos[i][0],
						},
					},
				},
			});
		}
		return;
	}
	return;
}

