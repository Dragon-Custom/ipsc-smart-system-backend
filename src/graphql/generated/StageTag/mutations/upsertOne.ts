import { mutationField, nonNull } from 'nexus'

export const StageTagUpsertOneMutation = mutationField('upsertOneStageTag', {
  type: nonNull('StageTag'),
  args: {
    where: nonNull('StageTagWhereUniqueInput'),
    create: nonNull('StageTagCreateInput'),
    update: nonNull('StageTagUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.stageTag.upsert({
      ...args,
      ...select,
    })
  },
})
