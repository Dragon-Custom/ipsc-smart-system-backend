import { mutationField, nonNull } from 'nexus'

export const ScorelistDeleteManyMutation = mutationField(
  'deleteManyScorelist',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'ScorelistWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.scorelist.deleteMany({ where } as any)
    },
  },
)
