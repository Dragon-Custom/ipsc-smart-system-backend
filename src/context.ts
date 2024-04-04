import { Prisma, PrismaClient } from "@prisma/client";
export let prisma = new PrismaClient();

export function updatePrisma(newPrisma: PrismaClient) {
	prisma = newPrisma;
}

interface SubscribeList {
	cb: () => void;
    model: Prisma.ModelName;
    action: Prisma.PrismaAction[];
}
const subscribeList: SubscribeList[] = [];

prisma.$use(async (params, next) => {
	// Manipulate params here
	const result = await next(params);
	console.log(result, params);

	subscribeList.forEach((subInfo) => {
		if (
			subInfo.action.includes(params.action) &&
            subInfo.model == params.model
		) {
			subInfo.cb();
		}
	});
	// See results here
	return result;
});

function subscribe(
	model: Prisma.ModelName,
	action: Prisma.PrismaAction[],
	cb: () => void,
): number {
	const index = subscribeList.length;
	subscribeList[subscribeList.length] = { cb, model, action };
	return index;
}
function unsubscribe(index: number) {
	delete subscribeList[index];
}

export interface Context {
	prisma: PrismaClient;
    subscribe: typeof subscribe;
    unsubscribe: typeof unsubscribe;
    userId?: number; // 1
}

export const context = (/* { req }: { req: Request } */): Context => {
	return {
		prisma,
		subscribe,
		unsubscribe,
	};
};
