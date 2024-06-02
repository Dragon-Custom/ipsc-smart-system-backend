import { inputObjectType, mutationType, nonNull } from "nexus";
import { LogLevel } from "../../context";

const LOG_CAT = "Stage Tag";

export const CreateStageTagInputType = inputObjectType({
	name: "CreateStageTagInput",
	definition(t) {
		t.nonNull.string("title");
		t.nonNull.string("color");
	},
});
export const UpdateStageTagInputType = inputObjectType({
	name: "UpdateStageTagInput",
	definition(t) {
		t.nullable.string("title");
		t.nullable.string("color");
	},
});


export const StageTagMutation = mutationType({
	definition(t) {
		t.nonNull.field("createStageTag", {
			type: "StageTag",
			description: "create and return the new stage tag",
			args: {
				stageTag: nonNull("CreateStageTagInput"),
			},
			resolve(src, args, ctx) {
				ctx.log(LogLevel.INFO, `Creating stage tag with data: ${JSON.stringify(args.stageTag)}`, LOG_CAT);
				return ctx.prisma.stageTag.create({
					data: {
						title: args.stageTag.title,
						color: args.stageTag.color,
					},
				});
			},
		});
		t.field("updateStageTag", {
			type: "StageTag",
			description: "return the newest stage tag, if not found return null",
			args: {
				id: nonNull("Int"),
				stageTag: nonNull("UpdateStageTagInput"),
			},
			async resolve(src, args, ctx) {
				ctx.log(LogLevel.INFO, `Updating stage tag by id: ${args.id} with data: ${JSON.stringify(args.stageTag)}`, LOG_CAT);
				try {
					return await ctx.prisma.stageTag.update({
						where: {
							id: args.id,
						},
						// eslint-disable-next-line @typescript-eslint/ban-ts-comment
						//@ts-expect-error
						data: {
							...args.stageTag,
						},
					});
				} catch (e) {
					ctx.log(LogLevel.ERROR, `Error updating stage tag: ${e}`, LOG_CAT);
					return null;
				}
			},
		});
		t.nonNull.boolean("deleteStageTag", {
			args: {
				id: nonNull("Int"),
			},
			async resolve(src, args, ctx) {
				ctx.log(LogLevel.INFO, `Deleting stage tag by id: ${args.id}`, LOG_CAT);
				try {
					await ctx.prisma.stageTag.delete({
						where: {
							id: args.id,
						},
					});
					return true;
				} catch (e) {
					ctx.log(LogLevel.ERROR, `Error deleting stage tag: ${e}`, LOG_CAT);
					return false;
				}
			},
		});
	},
});