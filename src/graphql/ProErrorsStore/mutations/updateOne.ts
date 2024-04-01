import { mutationField, nonNull } from "nexus";

export const ProErrorsStoreUpdateOneMutation = mutationField(
	"updateOneProErrorsStore",
	{
		type: nonNull("ProErrorsStore"),
		args: {
			data: nonNull("ProErrorsStoreUpdateInput"),
			where: nonNull("ProErrorsStoreWhereUniqueInput"),
		},
		resolve(_parent, { data, where }, { prisma, select }) {
			return prisma.proErrorsStore.update({
				where,
				data,
				...select,
			});
		},
	},
);
