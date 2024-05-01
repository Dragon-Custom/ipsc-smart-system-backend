import { Prisma, PrismaClient } from "@prisma/client";
import { YogaInitialContext } from "graphql-yoga";
export let prisma = new PrismaClient();

export function updatePrisma(newPrisma: PrismaClient) {
	prisma = newPrisma;
}


type SubscribeFn = (prisma:PrismaClient, prismaModel: Prisma.ModelName, prismaAction: Prisma.PrismaAction, params: Prisma.MiddlewareParams) => void;

interface SubscribeList {
	cb: SubscribeFn;
    model: Prisma.ModelName;
    action: Prisma.PrismaAction[];
}
const subscribeList: SubscribeList[] = [];

prisma.$use(async (params, next) => {
	// Manipulate params here
	const result = await next(params);
	// console.log(result, params);

	subscribeList.forEach((subInfo) => {
		if (
			subInfo.action.includes(params.action) &&
            subInfo.model == params.model
		) {
			subInfo.cb(prisma, params.model, params.action, params);
		}
	});
	// See results here
	return result;
});

export function subscribe(
	model: Prisma.ModelName,
	action: Prisma.PrismaAction[],
	cb: SubscribeFn,
): number {
	const index = subscribeList.length;
	subscribeList[subscribeList.length] = { cb, model, action };
	return index;
}
export function unsubscribe(index: number) {
	delete subscribeList[index];
}

export interface Context extends YogaInitialContext {
	prisma: PrismaClient;
    subscribe: typeof subscribe;
    unsubscribe: typeof unsubscribe;
	userId?: number; // 1
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	select: any;
}

export const context = (/* { req }: { req: Request } */): Context => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-expect-error
	return {
		prisma,
		subscribe,
		unsubscribe,
	};
};
