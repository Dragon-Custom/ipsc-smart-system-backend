import { queryField, list } from 'nexus'

export const ScoreboardFindFirstQuery = queryField('findFirstScoreboard', {
  type: 'Scoreboard',
  args: {
    where: 'ScoreboardWhereInput',
    orderBy: list('ScoreboardOrderByWithRelationInput'),
    cursor: 'ScoreboardWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ScoreboardScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.scoreboard.findFirst({
      ...args,
      ...select,
    })
  },
})
