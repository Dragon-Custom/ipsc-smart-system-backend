import { mutationField, nonNull } from 'nexus'

export const DqObjectsUpdateManyMutation = mutationField(
  'updateManyDqObjects',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('DqObjectsUpdateManyMutationInput'),
      where: 'DqObjectsWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.dqObjects.updateMany(args as any)
    },
  },
)
