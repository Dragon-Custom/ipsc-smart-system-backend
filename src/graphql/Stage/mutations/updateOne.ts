import { mutationField, nonNull } from "nexus";

export const StageUpdateOneMutation = mutationField("updateOneStage", {
	type: nonNull("Stage"),
	args: {
		data: nonNull("StageUpdateInput"),
		where: nonNull("StageWhereUniqueInput"),
	},
	resolve(_parent, { data, where }, { prisma, select }) {
		return prisma.stage.update({
			where,
			data,
			...select,
		});
	},
});
