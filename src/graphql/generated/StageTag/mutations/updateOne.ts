import { mutationField, nonNull } from 'nexus'

export const StageTagUpdateOneMutation = mutationField('updateOneStageTag', {
  type: nonNull('StageTag'),
  args: {
    data: nonNull('StageTagUpdateInput'),
    where: nonNull('StageTagWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.stageTag.update({
      where,
      data,
      ...select,
    })
  },
})
