import { queryField, nonNull, list } from 'nexus'

export const ScoreboardFindManyQuery = queryField('findManyScoreboard', {
  type: nonNull(list(nonNull('Scoreboard'))),
  args: {
    where: 'ScoreboardWhereInput',
    orderBy: list('ScoreboardOrderByWithRelationInput'),
    cursor: 'ScoreboardWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ScoreboardScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.scoreboard.findMany({
      ...args,
      ...select,
    })
  },
})
