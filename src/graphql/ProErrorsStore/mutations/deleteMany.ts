import { mutationField, nonNull } from "nexus";

export const ProErrorsStoreDeleteManyMutation = mutationField(
	"deleteManyProErrorsStore",
	{
		type: nonNull("BatchPayload"),
		args: {
			where: "ProErrorsStoreWhereInput",
		},
		resolve: async (_parent, { where }, { prisma }) => {
			return prisma.proErrorsStore.deleteMany({ where } as any);
		},
	},
);
