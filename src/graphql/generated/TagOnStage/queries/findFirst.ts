import { queryField, list } from 'nexus'

export const TagOnStageFindFirstQuery = queryField('findFirstTagOnStage', {
  type: 'TagOnStage',
  args: {
    where: 'TagOnStageWhereInput',
    orderBy: list('TagOnStageOrderByWithRelationInput'),
    cursor: 'TagOnStageWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('TagOnStageScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.tagOnStage.findFirst({
      ...args,
      ...select,
    })
  },
})
