import { mutationField, nonNull } from 'nexus'

export const StageCreateOneMutation = mutationField('createOneStage', {
  type: nonNull('Stage'),
  args: {
    data: nonNull('StageCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.stage.create({
      data,
      ...select,
    })
  },
})
