import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  log: [
    'query',
  ] /* fazer log de todas as querys exucutas para o banco de dados */,
})
