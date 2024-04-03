import { mutationField, nonNull } from 'nexus'

export const ScoreUpsertOneMutation = mutationField('upsertOneScore', {
  type: nonNull('Score'),
  args: {
    where: nonNull('ScoreWhereUniqueInput'),
    create: nonNull('ScoreCreateInput'),
    update: nonNull('ScoreUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.score.upsert({
      ...args,
      ...select,
    })
  },
})
