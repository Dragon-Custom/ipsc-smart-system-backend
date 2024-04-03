import { objectType } from 'nexus'

export const ProErrorsStore = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'ProErrorsStore',
  definition(t) {
    t.int('id')
    t.int('count')
    t.nullable.int('scoreId')
    t.int('proErrorObjectsId')
    t.field('proError', {
      type: 'ProErrorObjects',
      resolve(root: any) {
        return root.proError
      },
    })
    t.nullable.field('score', {
      type: 'Score',
      args: {
        where: 'ScoreWhereInput',
      },
      resolve(root: any) {
        return root.score
      },
    })
  },
})
