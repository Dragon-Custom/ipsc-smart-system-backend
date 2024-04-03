import { queryField, nonNull, list } from 'nexus'

export const ShooterFindManyQuery = queryField('findManyShooter', {
  type: nonNull(list(nonNull('Shooter'))),
  args: {
    where: 'ShooterWhereInput',
    orderBy: list('ShooterOrderByWithRelationInput'),
    cursor: 'ShooterWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ShooterScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.shooter.findMany({
      ...args,
      ...select,
    })
  },
})
