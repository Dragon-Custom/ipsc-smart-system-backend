import { mutationField, nonNull } from 'nexus'

export const TagOnStageDeleteOneMutation = mutationField(
  'deleteOneTagOnStage',
  {
    type: 'TagOnStage',
    args: {
      where: nonNull('TagOnStageWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.tagOnStage.delete({
        where,
        ...select,
      })
    },
  },
)
