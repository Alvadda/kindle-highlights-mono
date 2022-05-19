import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import { Apikey } from '@prisma/client'

import { prisma } from '../utils/db'

interface PrismaResponse<T> {
  data?: T
  error?: PrismaClientKnownRequestError
}

export async function readKey(key: string) {
  return await prisma.apikey.findUnique({
    where: { id: key },
    select: { admin: true, activ: true },
  })
}

export async function createKey(admin: boolean) {
  return await prisma.apikey.create({
    data: {
      admin,
    },
  })
}

export async function deleteKey(key: string) {
  try {
    const data = await prisma.apikey.delete({
      where: {
        id: key,
      },
    })

    return { data } as PrismaResponse<Apikey>
  } catch (error) {
    return { error: error } as PrismaResponse<Apikey>
  }
}
