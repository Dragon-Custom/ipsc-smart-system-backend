import { mutationField, nonNull } from 'nexus'

export const ScoreUpdateOneMutation = mutationField('updateOneScore', {
  type: nonNull('Score'),
  args: {
    data: nonNull('ScoreUpdateInput'),
    where: nonNull('ScoreWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.score.update({
      where,
      data,
      ...select,
    })
  },
})
