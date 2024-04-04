import { mutationField, nonNull } from 'nexus'

export const StageTagUpdateManyMutation = mutationField('updateManyStageTag', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('StageTagUpdateManyMutationInput'),
    where: 'StageTagWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.stageTag.updateMany(args as any)
  },
})
