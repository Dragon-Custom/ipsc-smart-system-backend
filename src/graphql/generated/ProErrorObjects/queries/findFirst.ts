import { queryField, list } from 'nexus'

export const ProErrorObjectsFindFirstQuery = queryField(
  'findFirstProErrorObjects',
  {
    type: 'ProErrorObjects',
    args: {
      where: 'ProErrorObjectsWhereInput',
      orderBy: list('ProErrorObjectsOrderByWithRelationInput'),
      cursor: 'ProErrorObjectsWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('ProErrorObjectsScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.proErrorObjects.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
