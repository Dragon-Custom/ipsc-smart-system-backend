import { mutationField, nonNull } from 'nexus'

export const ProErrorObjectsUpdateManyMutation = mutationField(
  'updateManyProErrorObjects',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('ProErrorObjectsUpdateManyMutationInput'),
      where: 'ProErrorObjectsWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.proErrorObjects.updateMany(args as any)
    },
  },
)
