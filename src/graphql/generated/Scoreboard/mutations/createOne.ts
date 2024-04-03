import { mutationField, nonNull } from 'nexus'

export const ScoreboardCreateOneMutation = mutationField(
  'createOneScoreboard',
  {
    type: nonNull('Scoreboard'),
    args: {
      data: nonNull('ScoreboardCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.scoreboard.create({
        data,
        ...select,
      })
    },
  },
)
