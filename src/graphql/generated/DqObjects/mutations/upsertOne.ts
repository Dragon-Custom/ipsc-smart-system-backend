import { mutationField, nonNull } from 'nexus'

export const DqObjectsUpsertOneMutation = mutationField('upsertOneDqObjects', {
  type: nonNull('DqObjects'),
  args: {
    where: nonNull('DqObjectsWhereUniqueInput'),
    create: nonNull('DqObjectsCreateInput'),
    update: nonNull('DqObjectsUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.dqObjects.upsert({
      ...args,
      ...select,
    })
  },
})
