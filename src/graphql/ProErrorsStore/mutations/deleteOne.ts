import { mutationField, nonNull } from "nexus";

export const ProErrorsStoreDeleteOneMutation = mutationField(
	"deleteOneProErrorsStore",
	{
		type: "ProErrorsStore",
		args: {
			where: nonNull("ProErrorsStoreWhereUniqueInput"),
		},
		resolve: async (_parent, { where }, { prisma, select }) => {
			return prisma.proErrorsStore.delete({
				where,
				...select,
			});
		},
	},
);
