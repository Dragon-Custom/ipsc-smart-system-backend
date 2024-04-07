import { queryField, nonNull } from 'nexus'

export const TagOnStageFindUniqueQuery = queryField('findUniqueTagOnStage', {
  type: 'TagOnStage',
  args: {
    where: nonNull('TagOnStageWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.tagOnStage.findUnique({
      where,
      ...select,
    })
  },
})
