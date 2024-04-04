import { queryField, nonNull, list } from 'nexus'

export const StageTagFindManyQuery = queryField('findManyStageTag', {
  type: nonNull(list(nonNull('StageTag'))),
  args: {
    where: 'StageTagWhereInput',
    orderBy: list('StageTagOrderByWithRelationInput'),
    cursor: 'StageTagWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('StageTagScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.stageTag.findMany({
      ...args,
      ...select,
    })
  },
})
