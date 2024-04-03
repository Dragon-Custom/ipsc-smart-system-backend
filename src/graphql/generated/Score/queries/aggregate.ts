import { queryField, list } from 'nexus'

export const ScoreAggregateQuery = queryField('aggregateScore', {
  type: 'AggregateScore',
  args: {
    where: 'ScoreWhereInput',
    orderBy: list('ScoreOrderByWithRelationInput'),
    cursor: 'ScoreWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.score.aggregate({ ...args, ...select }) as any
  },
})
