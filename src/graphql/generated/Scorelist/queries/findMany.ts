import { queryField, nonNull, list } from 'nexus'

export const ScorelistFindManyQuery = queryField('findManyScorelist', {
  type: nonNull(list(nonNull('Scorelist'))),
  args: {
    where: 'ScorelistWhereInput',
    orderBy: list('ScorelistOrderByWithRelationInput'),
    cursor: 'ScorelistWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ScorelistScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.scorelist.findMany({
      ...args,
      ...select,
    })
  },
})
