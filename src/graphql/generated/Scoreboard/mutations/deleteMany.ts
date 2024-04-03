import { mutationField, nonNull } from 'nexus'

export const ScoreboardDeleteManyMutation = mutationField(
  'deleteManyScoreboard',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'ScoreboardWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.scoreboard.deleteMany({ where } as any)
    },
  },
)
