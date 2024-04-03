import { queryField, nonNull } from 'nexus'

export const ShooterFindUniqueQuery = queryField('findUniqueShooter', {
  type: 'Shooter',
  args: {
    where: nonNull('ShooterWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.shooter.findUnique({
      where,
      ...select,
    })
  },
})
