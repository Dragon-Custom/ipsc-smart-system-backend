import { mutationField, nonNull } from 'nexus'

export const StageUpdateManyMutation = mutationField('updateManyStage', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('StageUpdateManyMutationInput'),
    where: 'StageWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.stage.updateMany(args as any)
  },
})
