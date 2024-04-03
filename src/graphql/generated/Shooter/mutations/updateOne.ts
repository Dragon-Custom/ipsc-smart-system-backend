import { mutationField, nonNull } from 'nexus'

export const ShooterUpdateOneMutation = mutationField('updateOneShooter', {
  type: nonNull('Shooter'),
  args: {
    data: nonNull('ShooterUpdateInput'),
    where: nonNull('ShooterWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.shooter.update({
      where,
      data,
      ...select,
    })
  },
})
