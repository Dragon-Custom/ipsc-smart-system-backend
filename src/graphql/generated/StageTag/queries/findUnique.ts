import { queryField, nonNull } from 'nexus'

export const StageTagFindUniqueQuery = queryField('findUniqueStageTag', {
  type: 'StageTag',
  args: {
    where: nonNull('StageTagWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.stageTag.findUnique({
      where,
      ...select,
    })
  },
})
