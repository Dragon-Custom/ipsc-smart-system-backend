import { mutationField, nonNull } from "nexus";

export const ProErrorObjectsUpsertOneMutation = mutationField(
	"upsertOneProErrorObjects",
	{
		type: nonNull("ProErrorObjects"),
		args: {
			where: nonNull("ProErrorObjectsWhereUniqueInput"),
			create: nonNull("ProErrorObjectsCreateInput"),
			update: nonNull("ProErrorObjectsUpdateInput"),
		},
		resolve(_parent, args, { prisma, select }) {
			return prisma.proErrorObjects.upsert({
				...args,
				...select,
			});
		},
	},
);
