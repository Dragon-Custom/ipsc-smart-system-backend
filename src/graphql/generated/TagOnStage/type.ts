import { objectType } from 'nexus'

export const TagOnStage = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'TagOnStage',
  definition(t) {
    t.int('id')
    t.int('tagId')
    t.int('stageId')
    t.nullable.int('flag')
    t.field('tag', {
      type: 'StageTag',
      resolve(root: any) {
        return root.tag
      },
    })
    t.field('stage', {
      type: 'Stage',
      resolve(root: any) {
        return root.stage
      },
    })
  },
})
