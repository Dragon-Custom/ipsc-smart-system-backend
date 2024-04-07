import { mutationField, nonNull } from 'nexus'

export const TagOnStageUpdateManyMutation = mutationField(
  'updateManyTagOnStage',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('TagOnStageUpdateManyMutationInput'),
      where: 'TagOnStageWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.tagOnStage.updateMany(args as any)
    },
  },
)
