import { mutationField, nonNull } from 'nexus'

export const TagOnStageUpdateOneMutation = mutationField(
  'updateOneTagOnStage',
  {
    type: nonNull('TagOnStage'),
    args: {
      data: nonNull('TagOnStageUpdateInput'),
      where: nonNull('TagOnStageWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.tagOnStage.update({
        where,
        data,
        ...select,
      })
    },
  },
)
