import { queryField, list } from 'nexus'

export const DqObjectsAggregateQuery = queryField('aggregateDqObjects', {
  type: 'AggregateDqObjects',
  args: {
    where: 'DqObjectsWhereInput',
    orderBy: list('DqObjectsOrderByWithRelationInput'),
    cursor: 'DqObjectsWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.dqObjects.aggregate({ ...args, ...select }) as any
  },
})
