import { mutationField, nonNull } from 'nexus'

export const ImageDeleteManyMutation = mutationField('deleteManyImage', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'ImageWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.image.deleteMany({ where } as any)
  },
})
