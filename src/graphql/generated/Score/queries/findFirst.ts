import { queryField, list } from 'nexus'

export const ScoreFindFirstQuery = queryField('findFirstScore', {
  type: 'Score',
  args: {
    where: 'ScoreWhereInput',
    orderBy: list('ScoreOrderByWithRelationInput'),
    cursor: 'ScoreWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ScoreScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.score.findFirst({
      ...args,
      ...select,
    })
  },
})
