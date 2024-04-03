import { objectType, list } from 'nexus'

export const Scorelist = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Scorelist',
  definition(t) {
    t.string('id')
    t.field('createAt', { type: 'DateTime' })
    t.field('lastUpdate', { type: 'DateTime' })
    t.nullable.int('scoreboardId')
    t.nullable.int('stageId')
    t.nullable.field('stage', {
      type: 'Stage',
      args: {
        where: 'StageWhereInput',
      },
      resolve(root: any) {
        return root.stage
      },
    })
    t.list.field('scores', {
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
        return root.scores
      },
    })
    t.nullable.field('scoreboard', {
      type: 'Scoreboard',
      args: {
        where: 'ScoreboardWhereInput',
      },
      resolve(root: any) {
        return root.scoreboard
      },
    })
    t.field('_count', {
      type: 'ScorelistCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
