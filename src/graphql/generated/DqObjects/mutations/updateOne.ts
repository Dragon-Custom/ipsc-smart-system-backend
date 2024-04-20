import { mutationField, nonNull } from 'nexus'

export const DqObjectsUpdateOneMutation = mutationField('updateOneDqObjects', {
  type: nonNull('DqObjects'),
  args: {
    data: nonNull('DqObjectsUpdateInput'),
    where: nonNull('DqObjectsWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.dqObjects.update({
      where,
      data,
      ...select,
    })
  },
})
