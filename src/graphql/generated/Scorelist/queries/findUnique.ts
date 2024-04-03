import { queryField, nonNull } from 'nexus'

export const ScorelistFindUniqueQuery = queryField('findUniqueScorelist', {
  type: 'Scorelist',
  args: {
    where: nonNull('ScorelistWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.scorelist.findUnique({
      where,
      ...select,
    })
  },
})
