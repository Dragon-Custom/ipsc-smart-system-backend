import { mutationField, nonNull } from 'nexus'

export const TagOnStageCreateOneMutation = mutationField(
  'createOneTagOnStage',
  {
    type: nonNull('TagOnStage'),
    args: {
      data: nonNull('TagOnStageCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.tagOnStage.create({
        data,
        ...select,
      })
    },
  },
)
