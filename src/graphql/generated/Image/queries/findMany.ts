import { queryField, nonNull, list } from 'nexus'

export const ImageFindManyQuery = queryField('findManyImage', {
  type: nonNull(list(nonNull('Image'))),
  args: {
    where: 'ImageWhereInput',
    orderBy: list('ImageOrderByWithRelationInput'),
    cursor: 'ImageWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ImageScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.image.findMany({
      ...args,
      ...select,
    })
  },
})
