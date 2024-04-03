import { mutationField, nonNull } from 'nexus'

export const ScoreDeleteManyMutation = mutationField('deleteManyScore', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'ScoreWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.score.deleteMany({ where } as any)
  },
})
