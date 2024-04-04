import { queryField, nonNull } from 'nexus'

export const ImageFindUniqueQuery = queryField('findUniqueImage', {
  type: 'Image',
  args: {
    where: nonNull('ImageWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.image.findUnique({
      where,
      ...select,
    })
  },
})
