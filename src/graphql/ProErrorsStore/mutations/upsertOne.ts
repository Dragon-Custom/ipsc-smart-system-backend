import { mutationField, nonNull } from "nexus";

export const ProErrorsStoreUpsertOneMutation = mutationField(
	"upsertOneProErrorsStore",
	{
		type: nonNull("ProErrorsStore"),
		args: {
			where: nonNull("ProErrorsStoreWhereUniqueInput"),
			create: nonNull("ProErrorsStoreCreateInput"),
			update: nonNull("ProErrorsStoreUpdateInput"),
		},
		resolve(_parent, args, { prisma, select }) {
			return prisma.proErrorsStore.upsert({
				...args,
				...select,
			});
		},
	},
);
