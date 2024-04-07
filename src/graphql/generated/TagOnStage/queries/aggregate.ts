import { queryField, list } from 'nexus'

export const TagOnStageAggregateQuery = queryField('aggregateTagOnStage', {
  type: 'AggregateTagOnStage',
  args: {
    where: 'TagOnStageWhereInput',
    orderBy: list('TagOnStageOrderByWithRelationInput'),
    cursor: 'TagOnStageWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.tagOnStage.aggregate({ ...args, ...select }) as any
  },
})
