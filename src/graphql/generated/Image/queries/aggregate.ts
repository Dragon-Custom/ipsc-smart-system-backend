import { queryField, list } from 'nexus'

export const ImageAggregateQuery = queryField('aggregateImage', {
  type: 'AggregateImage',
  args: {
    where: 'ImageWhereInput',
    orderBy: list('ImageOrderByWithRelationInput'),
    cursor: 'ImageWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.image.aggregate({ ...args, ...select }) as any
  },
})
