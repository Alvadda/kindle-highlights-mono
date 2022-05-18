import { Request, Response, NextFunction } from 'express'

import { API_KEY_HEADER } from '../utils/constants'
import { prisma } from '../utils/db'

export default async function (req: Request, res: Response, next: NextFunction) {
  const apiKey = req.headers[API_KEY_HEADER]

  if (typeof apiKey !== 'string') return res.status(401).send({ error: 'No api-key' })

  const existKey = Boolean(await prisma.apikey.findUnique({ where: { id: apiKey } }))
  if (!existKey) return res.status(401).send({ error: 'Invalid api-key' })

  next()
}
