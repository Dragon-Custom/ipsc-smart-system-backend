import { mutationField, nonNull } from "nexus";

export const ProErrorsStoreUpdateManyMutation = mutationField(
	"updateManyProErrorsStore",
	{
		type: nonNull("BatchPayload"),
		args: {
			data: nonNull("ProErrorsStoreUpdateManyMutationInput"),
			where: "ProErrorsStoreWhereInput",
		},
		resolve(_parent, args, { prisma }) {
			return prisma.proErrorsStore.updateMany(args as any);
		},
	},
);
