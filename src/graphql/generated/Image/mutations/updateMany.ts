import { mutationField, nonNull } from 'nexus'

export const ImageUpdateManyMutation = mutationField('updateManyImage', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('ImageUpdateManyMutationInput'),
    where: 'ImageWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.image.updateMany(args as any)
  },
})
