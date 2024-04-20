import { mutationField, nonNull } from 'nexus'

export const DqObjectsDeleteOneMutation = mutationField('deleteOneDqObjects', {
  type: 'DqObjects',
  args: {
    where: nonNull('DqObjectsWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.dqObjects.delete({
      where,
      ...select,
    })
  },
})
