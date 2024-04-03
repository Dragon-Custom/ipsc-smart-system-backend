import { mutationField, nonNull } from 'nexus'

export const ScoreCreateOneMutation = mutationField('createOneScore', {
  type: nonNull('Score'),
  args: {
    data: nonNull('ScoreCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.score.create({
      data,
      ...select,
    })
  },
})
