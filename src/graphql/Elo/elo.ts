import { MultiElo } from "multi-elo";
import { subscribe } from "../../context";

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


