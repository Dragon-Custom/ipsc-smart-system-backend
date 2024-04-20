import { mutationField, nonNull } from 'nexus'

export const DqObjectsDeleteManyMutation = mutationField(
  'deleteManyDqObjects',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'DqObjectsWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.dqObjects.deleteMany({ where } as any)
    },
  },
)
