import { mutationField, nonNull } from 'nexus'

export const TagOnStageDeleteManyMutation = mutationField(
  'deleteManyTagOnStage',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'TagOnStageWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.tagOnStage.deleteMany({ where } as any)
    },
  },
)
