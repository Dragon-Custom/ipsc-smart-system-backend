import { mutationField, nonNull } from 'nexus'

export const DqObjectsCreateOneMutation = mutationField('createOneDqObjects', {
  type: nonNull('DqObjects'),
  args: {
    data: nonNull('DqObjectsCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.dqObjects.create({
      data,
      ...select,
    })
  },
})
