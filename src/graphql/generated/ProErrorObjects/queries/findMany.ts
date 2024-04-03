import { queryField, nonNull, list } from 'nexus'

export const ProErrorObjectsFindManyQuery = queryField(
  'findManyProErrorObjects',
  {
    type: nonNull(list(nonNull('ProErrorObjects'))),
    args: {
      where: 'ProErrorObjectsWhereInput',
      orderBy: list('ProErrorObjectsOrderByWithRelationInput'),
      cursor: 'ProErrorObjectsWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('ProErrorObjectsScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.proErrorObjects.findMany({
        ...args,
        ...select,
      })
    },
  },
)
