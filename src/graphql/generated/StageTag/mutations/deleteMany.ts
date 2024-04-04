import { mutationField, nonNull } from 'nexus'

export const StageTagDeleteManyMutation = mutationField('deleteManyStageTag', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'StageTagWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.stageTag.deleteMany({ where } as any)
  },
})
