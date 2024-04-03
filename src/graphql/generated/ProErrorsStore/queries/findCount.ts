import { queryField, nonNull, list } from 'nexus'

export const ProErrorsStoreFindCountQuery = queryField(
  'findManyProErrorsStoreCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'ProErrorsStoreWhereInput',
      orderBy: list('ProErrorsStoreOrderByWithRelationInput'),
      cursor: 'ProErrorsStoreWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('ProErrorsStoreScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.proErrorsStore.count(args as any)
    },
  },
)
