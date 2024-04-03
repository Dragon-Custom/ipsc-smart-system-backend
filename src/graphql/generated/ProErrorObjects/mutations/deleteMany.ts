import { mutationField, nonNull } from 'nexus'

export const ProErrorObjectsDeleteManyMutation = mutationField(
  'deleteManyProErrorObjects',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'ProErrorObjectsWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.proErrorObjects.deleteMany({ where } as any)
    },
  },
)
