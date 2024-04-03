import { objectType, list } from 'nexus'

export const Scoreboard = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Scoreboard',
  definition(t) {
    t.int('id')
    t.field('createAt', { type: 'DateTime' })
    t.field('lastUpdate', { type: 'DateTime' })
    t.string('name')
    t.list.field('scorelists', {
      type: 'Scorelist',
      args: {
        where: 'ScorelistWhereInput',
        orderBy: list('ScorelistOrderByWithRelationInput'),
        cursor: 'ScorelistWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: list('ScorelistScalarFieldEnum'),
      },
      resolve(root: any) {
        return root.scorelists
      },
    })
    t.field('_count', {
      type: 'ScoreboardCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
