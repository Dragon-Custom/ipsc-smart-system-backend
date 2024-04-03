import { queryField, nonNull } from 'nexus'

export const ScoreFindUniqueQuery = queryField('findUniqueScore', {
  type: 'Score',
  args: {
    where: nonNull('ScoreWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.score.findUnique({
      where,
      ...select,
    })
  },
})
