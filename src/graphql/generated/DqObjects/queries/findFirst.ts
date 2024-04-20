import { queryField, list } from 'nexus'

export const DqObjectsFindFirstQuery = queryField('findFirstDqObjects', {
  type: 'DqObjects',
  args: {
    where: 'DqObjectsWhereInput',
    orderBy: list('DqObjectsOrderByWithRelationInput'),
    cursor: 'DqObjectsWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('DqObjectsScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.dqObjects.findFirst({
      ...args,
      ...select,
    })
  },
})
