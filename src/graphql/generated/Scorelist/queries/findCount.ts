import { queryField, nonNull, list } from 'nexus'

export const ScorelistFindCountQuery = queryField('findManyScorelistCount', {
  type: nonNull('Int'),
  args: {
    where: 'ScorelistWhereInput',
    orderBy: list('ScorelistOrderByWithRelationInput'),
    cursor: 'ScorelistWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ScorelistScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.scorelist.count(args as any)
  },
})
