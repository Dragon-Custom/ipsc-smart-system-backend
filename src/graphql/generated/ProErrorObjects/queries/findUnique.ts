import { queryField, nonNull } from 'nexus'

export const ProErrorObjectsFindUniqueQuery = queryField(
  'findUniqueProErrorObjects',
  {
    type: 'ProErrorObjects',
    args: {
      where: nonNull('ProErrorObjectsWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.proErrorObjects.findUnique({
        where,
        ...select,
      })
    },
  },
)
