import { objectType, list } from 'nexus'

export const DqObjects = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'DqObjects',
  definition(t) {
    t.int('id')
    t.string('index')
    t.string('category')
    t.string('title')
    t.string('description')
    t.list.field('Score', {
      type: 'Score',
      args: {
        where: 'ScoreWhereInput',
        orderBy: list('ScoreOrderByWithRelationInput'),
        cursor: 'ScoreWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: list('ScoreScalarFieldEnum'),
      },
      resolve(root: any) {
        return root.Score
      },
    })
    t.field('_count', {
      type: 'DqObjectsCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
