import { objectType, list } from 'nexus'

export const StageTag = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'StageTag',
  definition(t) {
    t.int('id')
    t.string('title')
    t.string('color')
    t.list.field('TagOnStage', {
      type: 'TagOnStage',
      args: {
        where: 'TagOnStageWhereInput',
        orderBy: list('TagOnStageOrderByWithRelationInput'),
        cursor: 'TagOnStageWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: list('TagOnStageScalarFieldEnum'),
      },
      resolve(root: any) {
        return root.TagOnStage
      },
    })
    t.field('_count', {
      type: 'StageTagCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
