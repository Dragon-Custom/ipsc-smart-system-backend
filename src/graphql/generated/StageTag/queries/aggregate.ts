import { queryField, list } from 'nexus'

export const StageTagAggregateQuery = queryField('aggregateStageTag', {
  type: 'AggregateStageTag',
  args: {
    where: 'StageTagWhereInput',
    orderBy: list('StageTagOrderByWithRelationInput'),
    cursor: 'StageTagWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.stageTag.aggregate({ ...args, ...select }) as any
  },
})
