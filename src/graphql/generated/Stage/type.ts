import { objectType, list } from 'nexus'

export const Stage = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Stage',
  definition(t) {
    t.int('id')
    t.nullable.field('createAt', { type: 'DateTime' })
    t.string('name')
    t.nullable.string('description')
    t.int('papers')
    t.int('poppers')
    t.int('noshoots')
    t.int('gunCondition')
    t.int('shooterId')
    t.decimal('walkthroughTime')
    t.int('minRounds')
    t.int('maxScore')
    t.field('stageType', { type: 'StageType' })
    t.string('imageId')
    t.nullable.int('stageTagId')
    t.field('image', {
      type: 'Image',
      resolve(root: any) {
        return root.image
      },
    })
    t.field('designer', {
      type: 'Shooter',
      resolve(root: any) {
        return root.designer
      },
    })
    t.list.field('Scorelist', {
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
        return root.Scorelist
      },
    })
    t.nullable.field('tags', {
      type: 'StageTag',
      args: {
        where: 'StageTagWhereInput',
      },
      resolve(root: any) {
        return root.tags
      },
    })
    t.field('_count', {
      type: 'StageCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
