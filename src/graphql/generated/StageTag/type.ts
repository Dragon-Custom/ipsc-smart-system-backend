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
    t.list.field('stages', {
      type: 'Stage',
      args: {
        where: 'StageWhereInput',
        orderBy: list('StageOrderByWithRelationInput'),
        cursor: 'StageWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: list('StageScalarFieldEnum'),
      },
      resolve(root: any) {
        return root.stages
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
