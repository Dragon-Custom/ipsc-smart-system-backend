import { objectType, list } from 'nexus'

export const Score = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Score',
  definition(t) {
    t.int('id')
    t.int('alphas')
    t.int('charlies')
    t.int('deltas')
    t.int('misses')
    t.int('noshoots')
    t.nullable.int('poppers')
    t.float('time')
    t.nullable.string('scorelistId')
    t.int('shooterId')
    t.int('round')
    t.field('shooter', {
      type: 'Shooter',
      resolve(root: any) {
        return root.shooter
      },
    })
    t.list.field('proErrors', {
      type: 'ProErrorsStore',
      args: {
        where: 'ProErrorsStoreWhereInput',
        orderBy: list('ProErrorsStoreOrderByWithRelationInput'),
        cursor: 'ProErrorsStoreWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: list('ProErrorsStoreScalarFieldEnum'),
      },
      resolve(root: any) {
        return root.proErrors
      },
    })
    t.nullable.field('scorelist', {
      type: 'Scorelist',
      args: {
        where: 'ScorelistWhereInput',
      },
      resolve(root: any) {
        return root.scorelist
      },
    })
    t.field('_count', {
      type: 'ScoreCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
