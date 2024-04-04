import { mutationField, nonNull } from 'nexus'

export const ImageUpdateOneMutation = mutationField('updateOneImage', {
  type: nonNull('Image'),
  args: {
    data: nonNull('ImageUpdateInput'),
    where: nonNull('ImageWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.image.update({
      where,
      data,
      ...select,
    })
  },
})
