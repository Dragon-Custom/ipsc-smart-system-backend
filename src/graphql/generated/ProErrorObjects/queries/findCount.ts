import { queryField, nonNull, list } from 'nexus'

export const ProErrorObjectsFindCountQuery = queryField(
  'findManyProErrorObjectsCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'ProErrorObjectsWhereInput',
      orderBy: list('ProErrorObjectsOrderByWithRelationInput'),
      cursor: 'ProErrorObjectsWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('ProErrorObjectsScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.proErrorObjects.count(args as any)
    },
  },
)
