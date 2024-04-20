import { queryField, nonNull, list } from 'nexus'

export const DqObjectsFindCountQuery = queryField('findManyDqObjectsCount', {
  type: nonNull('Int'),
  args: {
    where: 'DqObjectsWhereInput',
    orderBy: list('DqObjectsOrderByWithRelationInput'),
    cursor: 'DqObjectsWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('DqObjectsScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.dqObjects.count(args as any)
  },
})
