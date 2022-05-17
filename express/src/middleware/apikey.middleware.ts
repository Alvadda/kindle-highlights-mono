import { Request, Response, NextFunction } from 'express'
import { prisma } from '../utils/db'

const API_KEY_HEADER = 'api-key'

export default async function (req: Request, res: Response, next: NextFunction) {
  const apiKey = req.headers[API_KEY_HEADER]

  if (typeof apiKey !== 'string') return res.status(401).send({ error: 'No api-key' })

  const existKey = Boolean(await prisma.apikey.findUnique({ where: { id: apiKey } }))
  if (!existKey) return res.status(401).send({ error: 'Invalid api-key' })

  next()
}
