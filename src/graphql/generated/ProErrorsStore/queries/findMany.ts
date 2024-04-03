import { queryField, nonNull, list } from 'nexus'

export const ProErrorsStoreFindManyQuery = queryField(
  'findManyProErrorsStore',
  {
    type: nonNull(list(nonNull('ProErrorsStore'))),
    args: {
      where: 'ProErrorsStoreWhereInput',
      orderBy: list('ProErrorsStoreOrderByWithRelationInput'),
      cursor: 'ProErrorsStoreWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('ProErrorsStoreScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.proErrorsStore.findMany({
        ...args,
        ...select,
      })
    },
  },
)
