import { mutationField, nonNull } from 'nexus'

export const StageTagCreateOneMutation = mutationField('createOneStageTag', {
  type: nonNull('StageTag'),
  args: {
    data: nonNull('StageTagCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.stageTag.create({
      data,
      ...select,
    })
  },
})
