import { mutationField, nonNull } from 'nexus'

export const StageTagDeleteOneMutation = mutationField('deleteOneStageTag', {
  type: 'StageTag',
  args: {
    where: nonNull('StageTagWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.stageTag.delete({
      where,
      ...select,
    })
  },
})
