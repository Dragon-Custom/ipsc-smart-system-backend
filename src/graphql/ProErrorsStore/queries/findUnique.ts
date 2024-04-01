import { queryField, nonNull } from "nexus";

export const ProErrorsStoreFindUniqueQuery = queryField(
	"findUniqueProErrorsStore",
	{
		type: "ProErrorsStore",
		args: {
			where: nonNull("ProErrorsStoreWhereUniqueInput"),
		},
		resolve(_parent, { where }, { prisma, select }) {
			return prisma.proErrorsStore.findUnique({
				where,
				...select,
			});
		},
	},
);
