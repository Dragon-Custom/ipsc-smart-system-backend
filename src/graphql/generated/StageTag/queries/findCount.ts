import { queryField, nonNull, list } from 'nexus'

export const StageTagFindCountQuery = queryField('findManyStageTagCount', {
  type: nonNull('Int'),
  args: {
    where: 'StageTagWhereInput',
    orderBy: list('StageTagOrderByWithRelationInput'),
    cursor: 'StageTagWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('StageTagScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.stageTag.count(args as any)
  },
})
