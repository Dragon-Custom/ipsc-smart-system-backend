import { Prisma } from "@prisma/client";
import { extendType, inputObjectType, nonNull } from "nexus";


export const CreateStageInputType = inputObjectType({
	name: "CreateStageInput",
	nonNullDefaults: {
		input: true,
		output: true,
	},
	definition(t) {
		t.string("name");
		t.id("imageId");
		t.nullable.string("description");
		t.int("papers");
		t.int("poppers");
		t.int("noshoots");
		t.int("gunCondition");
		t.int("designerId");
		t.float("walkthroughTime", {
			description: "unit: minutes",
		});
		t.nullable.list.int("tagsId", {
			default: [],
		});
	},
});
export const UpdateStageInputType = inputObjectType({
	name: "UpdateStageInput",
	nonNullDefaults: {
		input: false,
		output: false,
	},
	definition(t) {
		t.id("id");
		t.string("name");
		t.id("imageId");
		t.string("description");
		t.int("papers");
		t.int("poppers");
		t.int("noshoots");
		t.int("gunCondition");
		t.int("designerId");
		t.float("walkthroughTime", {
			description: "unit: minutes",
		});
		t.list.int("tagsId", {
			default: [],
		});
	},
});

export const StageMutation = extendType({
	type: "Mutation",
	definition(t) {
		t.field("createStage", {
			type: "Stage",
			args: {
				stage: nonNull("CreateStageInput"),
			},
			resolve(src, args, ctx) {
				return ctx.prisma.stage.create({
					data: {
						name: args.stage.name,
						description: args.stage.description,
						image: {
							connect: {
								id: args.stage.imageId,
							},
						},
						poppers: args.stage.poppers,
						papers: args.stage.papers,
						noshoots: args.stage.noshoots,
						gunCondition: args.stage.gunCondition,
						designer: {
							connect: {
								id: args.stage.designerId,
							},
						},
						walkthroughTime: args.stage.walkthroughTime,
						tags: {
							createMany: {
								data: args.stage.tagsId?.map((tagId) => ({ tagId: tagId })),
							},
						},
					},
					...ctx.select,
				});
			},
		});
		t.field("updateStage", {
			type: "Stage",
			args: {
				id: nonNull("Int"),
				stage: "UpdateStageInput",
			},
			async resolve(src, args, ctx) {
				const updateData: Prisma.StageUpdateArgs["data"] = {};
				if (args.stage?.name) {
					updateData.name = args.stage.name;
				}
				if (args.stage?.description) {
					updateData.description = args.stage.description;
				}
				if (args.stage?.imageId) {
					updateData.image = {
						connect: {
							id: args.stage.imageId,
						},
					};
				}
				if (args.stage?.poppers) {
					updateData.poppers = args.stage.poppers;
				}
				if (args.stage?.papers) {
					updateData.papers = args.stage.papers;
				}
				if (args.stage?.noshoots) {
					updateData.noshoots = args.stage.noshoots;
				}
				if (args.stage?.gunCondition) {
					updateData.gunCondition = args.stage.gunCondition;
				}
				if (args.stage?.designerId) {
					updateData.designer = {
						connect: {
							id: args.stage.designerId,
						},
					};
				}
				if (args.stage?.walkthroughTime) {
					updateData.walkthroughTime = args.stage.walkthroughTime;
				}
				if (args.stage?.tagsId) {
					updateData.tags = {
						deleteMany: {
							stageId: args.id,
						},
						createMany: {
							// eslint-disable-next-line @typescript-eslint/ban-ts-comment
							//@ts-expect-error
							data: args.stage.tagsId?.map((tagId) => ({ tagId: tagId })),
						},
					};
				}

				try {
					return await ctx.prisma.stage.update({
						where: {
							id: args.id,
						},
						data: updateData,
						...ctx.select,
					});
				} catch (error) {
					return null;
				}
			},
		});
		t.field("deleteStage", {
			type: "Stage",
			args: {
				id: nonNull("Int"),
			},
			async resolve(src, args, ctx) {
				try {
					return await ctx.prisma.stage.delete({
						where: {
							id: args.id,
						},
						...ctx.select,
					});
				} catch (error) {
					return null;
				}
			},
		});
	},
});