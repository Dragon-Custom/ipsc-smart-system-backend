import { Prisma, PrismaClient } from "@prisma/client";
import { YogaInitialContext } from "graphql-yoga";
export let prisma = new PrismaClient();
import * as log4js from "log4js";

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

export enum LogLevel {
	TRACE = "trace",
	DEBUG = "debug",
	INFO = "info",
	WARN = "warn",
	ERROR = "error",
	FATAL = "fatal",
	MARK = "mark",
}
let logger = log4js.getLogger();

const LOG_LEVEL = process.env.LOG_LEVEL || LogLevel.INFO;

log4js.configure({
	appenders: {
		"stdout-filtered": {
			type: "logLevelFilter",
			level: LOG_LEVEL,
			appender: "stdout",
		},
		stdout: {
			type: "stdout",
		},
		global: {
			type: "file",
			filename: "logs/global.log",
		},
		multiCategory: {
			type: "multiFile",
			base: "logs/category/",
			property: "categoryName",
			extension: ".log",
		},
	},
	categories: {
		default: {
			appenders: ["stdout-filtered", "global", "multiCategory"],
			level: "ALL",
		},
	},
});

export function log(level: LogLevel, message: string, category?: string) {
	logger = log4js.getLogger(category);
	logger[level](message);
}

// log(LogLevel.TRACE, "This is a trace message", "trace-cat");
// log(LogLevel.DEBUG, "This is a debug message", "debug-cat");
// log(LogLevel.INFO, "This is an info message", "info-cat");
// log(LogLevel.WARN, "This is a warning message", "warn-cat");
// log(LogLevel.ERROR, "This is an error message", "error-cat");
// log(LogLevel.FATAL, "This is a fatal message", "fatal-cat");
// log(LogLevel.MARK, "This is a mark message", "mark-cat");

export interface Context extends YogaInitialContext {
	prisma: PrismaClient;
    subscribe: typeof subscribe;
    unsubscribe: typeof unsubscribe;
	userId?: number; // 1
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	select: any;
	logger: typeof logger;
	log: typeof log;
}

export const context = (/* { req }: { req: Request } */): Context => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-expect-error
	return {
		prisma,
		subscribe,
		unsubscribe,
		logger,
		log,
	};
};
