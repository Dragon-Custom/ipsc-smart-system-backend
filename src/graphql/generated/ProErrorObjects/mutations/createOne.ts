import { mutationField, nonNull } from 'nexus'

export const ProErrorObjectsCreateOneMutation = mutationField(
  'createOneProErrorObjects',
  {
    type: nonNull('ProErrorObjects'),
    args: {
      data: nonNull('ProErrorObjectsCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.proErrorObjects.create({
        data,
        ...select,
      })
    },
  },
)
