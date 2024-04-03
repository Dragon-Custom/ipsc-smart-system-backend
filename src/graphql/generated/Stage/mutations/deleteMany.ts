import { mutationField, nonNull } from 'nexus'

export const StageDeleteManyMutation = mutationField('deleteManyStage', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'StageWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.stage.deleteMany({ where } as any)
  },
})
