import { queryField, list } from 'nexus'

export const ImageFindFirstQuery = queryField('findFirstImage', {
  type: 'Image',
  args: {
    where: 'ImageWhereInput',
    orderBy: list('ImageOrderByWithRelationInput'),
    cursor: 'ImageWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ImageScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.image.findFirst({
      ...args,
      ...select,
    })
  },
})
