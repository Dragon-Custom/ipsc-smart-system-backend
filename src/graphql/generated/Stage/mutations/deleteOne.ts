import { mutationField, nonNull } from 'nexus'

export const StageDeleteOneMutation = mutationField('deleteOneStage', {
  type: 'Stage',
  args: {
    where: nonNull('StageWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.stage.delete({
      where,
      ...select,
    })
  },
})
