import { mutationField, nonNull } from 'nexus'

export const TagOnStageUpsertOneMutation = mutationField(
  'upsertOneTagOnStage',
  {
    type: nonNull('TagOnStage'),
    args: {
      where: nonNull('TagOnStageWhereUniqueInput'),
      create: nonNull('TagOnStageCreateInput'),
      update: nonNull('TagOnStageUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.tagOnStage.upsert({
        ...args,
        ...select,
      })
    },
  },
)
