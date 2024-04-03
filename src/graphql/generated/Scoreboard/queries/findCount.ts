import { queryField, nonNull, list } from 'nexus'

export const ScoreboardFindCountQuery = queryField('findManyScoreboardCount', {
  type: nonNull('Int'),
  args: {
    where: 'ScoreboardWhereInput',
    orderBy: list('ScoreboardOrderByWithRelationInput'),
    cursor: 'ScoreboardWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ScoreboardScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.scoreboard.count(args as any)
  },
})
