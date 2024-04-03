import { mutationField, nonNull } from 'nexus'

export const StageUpsertOneMutation = mutationField('upsertOneStage', {
  type: nonNull('Stage'),
  args: {
    where: nonNull('StageWhereUniqueInput'),
    create: nonNull('StageCreateInput'),
    update: nonNull('StageUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.stage.upsert({
      ...args,
      ...select,
    })
  },
})
