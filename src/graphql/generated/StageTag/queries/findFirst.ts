import { queryField, list } from 'nexus'

export const StageTagFindFirstQuery = queryField('findFirstStageTag', {
  type: 'StageTag',
  args: {
    where: 'StageTagWhereInput',
    orderBy: list('StageTagOrderByWithRelationInput'),
    cursor: 'StageTagWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('StageTagScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.stageTag.findFirst({
      ...args,
      ...select,
    })
  },
})
