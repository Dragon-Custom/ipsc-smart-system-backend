import { queryField, nonNull, list } from 'nexus'

export const ShooterFindCountQuery = queryField('findManyShooterCount', {
  type: nonNull('Int'),
  args: {
    where: 'ShooterWhereInput',
    orderBy: list('ShooterOrderByWithRelationInput'),
    cursor: 'ShooterWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ShooterScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.shooter.count(args as any)
  },
})
