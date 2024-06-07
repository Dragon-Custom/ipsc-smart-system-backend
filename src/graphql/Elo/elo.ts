import { MultiElo } from "multi-elo";
import { log, LogLevel, prisma } from "../../context";

const LOG_CAT = "ELO System";

export type ShooterId = number;
export type ShooterRank = number;
export type Elo = number;

export type ShooterElo = Record<ShooterId, Elo>;

export function calculateElo(shooterElos: ShooterElo[], ranks: ShooterRank[]): ShooterElo[] {
	log(LogLevel.DEBUG, `Calculating elo, shooterElos: ${JSON.stringify(shooterElos)}, ranks: ${JSON.stringify(ranks)}`, LOG_CAT);
	const elo = new MultiElo();

	const elos = shooterElos.map((elo) => {
		return elo[1];
	});

	const newElos = elo.getNewRatings(elos, ranks);

	return newElos.map((elo, index) => {
		return [shooterElos[index][0], elo];
	});
}


export async function updateElo(/* scorelistId: number, round: number */) {
	log(LogLevel.INFO, "Updating elo", LOG_CAT);
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
		// const sumOfHitFactors: typeof scores = [];

		// for (const score of scores) {
		// 	const dubplicatedScore = sumOfHitFactors.findIndex((s) => s.shooterId === score.shooterId);
		// 	if (dubplicatedScore > -1) {
		// 		sumOfHitFactors[dubplicatedScore].hitFactor += score.hitFactor;
		// 	} else {
		// 		sumOfHitFactors.push(score);
		// 	}
		// }
		// const orderedScores: Record<ShooterId, ShooterRank>[] = sumOfHitFactors.sort((a, b) => a.hitFactor - b.hitFactor).map((score, i) => [score.shooterId, i + 1]);
		// const elos: ShooterElo[] = [];
		// for (const i in orderedScores) {
		// 	const shooterElo = await prisma.elo.findFirst({
		// 		where: {
		// 			shooterId: orderedScores[i][0],
		// 		},
		// 		orderBy: {
		// 			createAt: "desc",
		// 		},
		// 	});
		// 	elos.push([orderedScores[i][0], shooterElo?.elo || parseInt(process.env.INIT_ELO || "1000")]);
		// }
		// const ranks = orderedScores.map((score, i) => i + 1);
		// const newElos = calculateElo(elos, ranks);
		// const currentTick = (await prisma.elo.findFirst({
		// 	orderBy: {
		// 		tick: "desc",
		// 	},
		// 	select: {
		// 		tick: true,
		// 	},
		// }))?.tick || 0;
		// for (const i in newElos) {
		// 	log(LogLevel.DEBUG, `Shooter ${newElos[i][0]} elo: ${newElos[i][1]}`, LOG_CAT);
		// 	await prisma.elo.create({
		// 		data: {
		// 			tick: currentTick + 1,
		// 			elo: newElos[i][1],
		// 			shooter: {
		// 				connect: {
		// 					id:  newElos[i][0],
		// 				},
		// 			},
		// 		},
		// 	});
		// }

		const shooterIds = await prisma.shooter.findMany({
			select: {
				id: true,
			},
		});
		const avgHitFactor: Record<ShooterId, number>[] = [];
		for (const shooterId of shooterIds) {
			const avg = await prisma.score.aggregate({
				where: {
					shooterId: shooterId.id,
					state: {
						notIn: ["DidNotScore"],
					},
				},
				_avg: {
					hitFactor: true,
				},
			});
			avgHitFactor.push([shooterId.id, avg._avg.hitFactor || 0]);
		}
		const sortedAvgHitFactor = avgHitFactor.sort((a, b) => b[1]  - a[1]);
		const ranks = sortedAvgHitFactor.map((score, i) => i + 1);
		const elos: ShooterElo[] = [];

		for (const shooterId in sortedAvgHitFactor) {
			const shooterElo = await prisma.elo.findFirst({
				where: {
					shooterId: sortedAvgHitFactor[shooterId][0],
				},
				orderBy: {
					createAt: "desc",
				},
			});
			elos.push([parseInt(shooterId), shooterElo?.elo || parseInt(process.env.INIT_ELO || "1000")]);
		}
		log(LogLevel.DEBUG, `sortedAvgHitFactor	: ${JSON.stringify(sortedAvgHitFactor)}`, LOG_CAT);
		log(LogLevel.DEBUG, `ranks				: ${JSON.stringify(ranks)}`, LOG_CAT);
		log(LogLevel.DEBUG, `elos				: ${JSON.stringify(elos)}`, LOG_CAT);
		const newElos = calculateElo(elos, ranks);
		log(LogLevel.DEBUG, `newElos			: ${JSON.stringify(newElos)}`, LOG_CAT);
		const currentTick = (await prisma.elo.findFirst({
			orderBy: {
				tick: "desc",
			},
			select: {
				tick: true,
			},
		}))?.tick || 0;
		for (const i in newElos) {
			log(LogLevel.DEBUG, `Shooter ${sortedAvgHitFactor[i][0]} elo: ${newElos[i]}`, LOG_CAT);
			await prisma.elo.create({
				data: {
					tick: currentTick + 1,
					elo: newElos[i][1],
					shooter: {
						connect: {
							id:  sortedAvgHitFactor[i][0],
						},
					},
				},
			});
		}
		return;
	} else {
		log(LogLevel.WARN, "Not enough scores (less than 2) to calculate elo", LOG_CAT);
		return;
	}
}

