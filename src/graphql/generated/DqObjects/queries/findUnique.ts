import { queryField, nonNull } from 'nexus'

export const DqObjectsFindUniqueQuery = queryField('findUniqueDqObjects', {
  type: 'DqObjects',
  args: {
    where: nonNull('DqObjectsWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.dqObjects.findUnique({
      where,
      ...select,
    })
  },
})
