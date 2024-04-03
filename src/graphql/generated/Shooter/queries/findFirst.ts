import { queryField, list } from 'nexus'

export const ShooterFindFirstQuery = queryField('findFirstShooter', {
  type: 'Shooter',
  args: {
    where: 'ShooterWhereInput',
    orderBy: list('ShooterOrderByWithRelationInput'),
    cursor: 'ShooterWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ShooterScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.shooter.findFirst({
      ...args,
      ...select,
    })
  },
})
