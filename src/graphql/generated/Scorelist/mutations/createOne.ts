import { mutationField, nonNull } from 'nexus'

export const ScorelistCreateOneMutation = mutationField('createOneScorelist', {
  type: nonNull('Scorelist'),
  args: {
    data: 'ScorelistCreateInput',
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.scorelist.create({
      data,
      ...select,
    })
  },
})
