import { queryField, list } from 'nexus'

export const ProErrorsStoreFindFirstQuery = queryField(
  'findFirstProErrorsStore',
  {
    type: 'ProErrorsStore',
    args: {
      where: 'ProErrorsStoreWhereInput',
      orderBy: list('ProErrorsStoreOrderByWithRelationInput'),
      cursor: 'ProErrorsStoreWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('ProErrorsStoreScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.proErrorsStore.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
