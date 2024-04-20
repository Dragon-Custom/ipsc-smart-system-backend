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
    t.int('poppers')
    t.float('time')
    t.int('proErrorCount')
    t.int('scorelistId')
    t.int('shooterId')
    t.decimal('hitFactor')
    t.field('state', { type: 'ScoreState' })
    t.int('round')
    t.nullable.int('dqObjectsId')
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
    t.field('scorelist', {
      type: 'Scorelist',
      resolve(root: any) {
        return root.scorelist
      },
    })
    t.nullable.field('dqReason', {
      type: 'DqObjects',
      args: {
        where: 'DqObjectsWhereInput',
      },
      resolve(root: any) {
        return root.dqReason
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
