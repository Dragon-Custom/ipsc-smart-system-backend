import { mutationField, nonNull } from 'nexus'

export const ProErrorObjectsDeleteOneMutation = mutationField(
  'deleteOneProErrorObjects',
  {
    type: 'ProErrorObjects',
    args: {
      where: nonNull('ProErrorObjectsWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.proErrorObjects.delete({
        where,
        ...select,
      })
    },
  },
)
