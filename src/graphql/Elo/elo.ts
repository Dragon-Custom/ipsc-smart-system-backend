import { MultiElo } from "multi-elo";

export type ShooterId = number;
export type ShooterRank = number;
export type ShooterElo = number;

export type ShooterELO = Record<ShooterId, ShooterElo>;

export function calculateElo(shooterElos: ShooterELO[], ranks: ShooterRank[]): ShooterELO[] {
	const elo = new MultiElo({ k: 64, d: 800, verbose: false});

	const elos = shooterElos.map((elo, index) => {
		return elo[1];
	});

	const newElos = elo.getNewRatings(elos, ranks);

	return newElos.map((elo, index) => {
		return [shooterElos[index][0], elo];
	});
}