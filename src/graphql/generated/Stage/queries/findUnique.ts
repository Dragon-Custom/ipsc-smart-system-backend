import { queryField, nonNull } from 'nexus'

export const StageFindUniqueQuery = queryField('findUniqueStage', {
  type: 'Stage',
  args: {
    where: nonNull('StageWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.stage.findUnique({
      where,
      ...select,
    })
  },
})
