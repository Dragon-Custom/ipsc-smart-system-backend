import { mutationField, nonNull } from "nexus";

export const ProErrorObjectsUpdateOneMutation = mutationField(
	"updateOneProErrorObjects",
	{
		type: nonNull("ProErrorObjects"),
		args: {
			data: nonNull("ProErrorObjectsUpdateInput"),
			where: nonNull("ProErrorObjectsWhereUniqueInput"),
		},
		resolve(_parent, { data, where }, { prisma, select }) {
			return prisma.proErrorObjects.update({
				where,
				data,
				...select,
			});
		},
	},
);
