import { queryField, list } from 'nexus'

export const ProErrorsStoreAggregateQuery = queryField(
  'aggregateProErrorsStore',
  {
    type: 'AggregateProErrorsStore',
    args: {
      where: 'ProErrorsStoreWhereInput',
      orderBy: list('ProErrorsStoreOrderByWithRelationInput'),
      cursor: 'ProErrorsStoreWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.proErrorsStore.aggregate({ ...args, ...select }) as any
    },
  },
)
