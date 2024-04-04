import { mutationField, nonNull } from 'nexus'

export const ImageDeleteOneMutation = mutationField('deleteOneImage', {
  type: 'Image',
  args: {
    where: nonNull('ImageWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.image.delete({
      where,
      ...select,
    })
  },
})
