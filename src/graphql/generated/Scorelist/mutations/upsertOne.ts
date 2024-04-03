import { mutationField, nonNull } from 'nexus'

export const ScorelistUpsertOneMutation = mutationField('upsertOneScorelist', {
  type: nonNull('Scorelist'),
  args: {
    where: nonNull('ScorelistWhereUniqueInput'),
    create: nonNull('ScorelistCreateInput'),
    update: nonNull('ScorelistUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.scorelist.upsert({
      ...args,
      ...select,
    })
  },
})
