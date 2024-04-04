import { objectType } from 'nexus'

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
    t.nullable.int('stageId')
    t.nullable.field('Stage', {
      type: 'Stage',
      args: {
        where: 'StageWhereInput',
      },
      resolve(root: any) {
        return root.Stage
      },
    })
  },
})
