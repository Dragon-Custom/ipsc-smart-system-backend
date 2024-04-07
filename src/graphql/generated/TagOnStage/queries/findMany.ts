import { queryField, nonNull, list } from 'nexus'

export const TagOnStageFindManyQuery = queryField('findManyTagOnStage', {
  type: nonNull(list(nonNull('TagOnStage'))),
  args: {
    where: 'TagOnStageWhereInput',
    orderBy: list('TagOnStageOrderByWithRelationInput'),
    cursor: 'TagOnStageWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('TagOnStageScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.tagOnStage.findMany({
      ...args,
      ...select,
    })
  },
})
