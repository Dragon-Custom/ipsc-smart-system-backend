import { queryField, nonNull, list } from 'nexus'

export const TagOnStageFindCountQuery = queryField('findManyTagOnStageCount', {
  type: nonNull('Int'),
  args: {
    where: 'TagOnStageWhereInput',
    orderBy: list('TagOnStageOrderByWithRelationInput'),
    cursor: 'TagOnStageWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('TagOnStageScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.tagOnStage.count(args as any)
  },
})
