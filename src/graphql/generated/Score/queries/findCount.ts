import { queryField, nonNull, list } from 'nexus'

export const ScoreFindCountQuery = queryField('findManyScoreCount', {
  type: nonNull('Int'),
  args: {
    where: 'ScoreWhereInput',
    orderBy: list('ScoreOrderByWithRelationInput'),
    cursor: 'ScoreWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ScoreScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.score.count(args as any)
  },
})
