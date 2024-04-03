import { queryField, list } from 'nexus'

export const ScoreboardAggregateQuery = queryField('aggregateScoreboard', {
  type: 'AggregateScoreboard',
  args: {
    where: 'ScoreboardWhereInput',
    orderBy: list('ScoreboardOrderByWithRelationInput'),
    cursor: 'ScoreboardWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.scoreboard.aggregate({ ...args, ...select }) as any
  },
})
