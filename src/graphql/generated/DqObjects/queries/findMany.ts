import { queryField, nonNull, list } from 'nexus'

export const DqObjectsFindManyQuery = queryField('findManyDqObjects', {
  type: nonNull(list(nonNull('DqObjects'))),
  args: {
    where: 'DqObjectsWhereInput',
    orderBy: list('DqObjectsOrderByWithRelationInput'),
    cursor: 'DqObjectsWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('DqObjectsScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.dqObjects.findMany({
      ...args,
      ...select,
    })
  },
})
