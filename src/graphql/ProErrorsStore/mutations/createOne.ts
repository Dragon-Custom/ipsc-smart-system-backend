import { mutationField, nonNull } from "nexus";

export const ProErrorsStoreCreateOneMutation = mutationField(
	"createOneProErrorsStore",
	{
		type: nonNull("ProErrorsStore"),
		args: {
			data: nonNull("ProErrorsStoreCreateInput"),
		},
		resolve(_parent, { data }, { prisma, select }) {
			return prisma.proErrorsStore.create({
				data,
				...select,
			});
		},
	},
);
