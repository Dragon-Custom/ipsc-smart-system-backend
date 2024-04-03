import { mutationField, nonNull } from 'nexus'

export const ShooterDeleteOneMutation = mutationField('deleteOneShooter', {
  type: 'Shooter',
  args: {
    where: nonNull('ShooterWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.shooter.delete({
      where,
      ...select,
    })
  },
})
