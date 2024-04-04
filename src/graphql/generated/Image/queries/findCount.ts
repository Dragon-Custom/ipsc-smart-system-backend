import { queryField, nonNull, list } from 'nexus'

export const ImageFindCountQuery = queryField('findManyImageCount', {
  type: nonNull('Int'),
  args: {
    where: 'ImageWhereInput',
    orderBy: list('ImageOrderByWithRelationInput'),
    cursor: 'ImageWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ImageScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.image.count(args as any)
  },
})
