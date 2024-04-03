import { mutationField, nonNull } from 'nexus'

export const ScoreboardUpsertOneMutation = mutationField(
  'upsertOneScoreboard',
  {
    type: nonNull('Scoreboard'),
    args: {
      where: nonNull('ScoreboardWhereUniqueInput'),
      create: nonNull('ScoreboardCreateInput'),
      update: nonNull('ScoreboardUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.scoreboard.upsert({
        ...args,
        ...select,
      })
    },
  },
)
