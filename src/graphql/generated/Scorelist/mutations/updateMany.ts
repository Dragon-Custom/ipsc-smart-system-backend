import { mutationField, nonNull } from 'nexus'

export const ScorelistUpdateManyMutation = mutationField(
  'updateManyScorelist',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('ScorelistUpdateManyMutationInput'),
      where: 'ScorelistWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.scorelist.updateMany(args as any)
    },
  },
)
