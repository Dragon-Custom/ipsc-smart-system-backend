import { objectType, list } from 'nexus'

export const Image = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Image',
  definition(t) {
    t.string('id')
    t.string('imagePath')
    t.list.field('Stage', {
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
        return root.Stage
      },
    })
    t.field('_count', {
      type: 'ImageCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
