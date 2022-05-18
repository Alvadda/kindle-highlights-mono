import { Request, Response } from 'express'

import { prisma } from '../utils/db'
import { API_KEY_HEADER } from '../utils/constants'

export async function createApiKey(req: Request, res: Response) {
  const apiKey = req.headers[API_KEY_HEADER]
  const { admin } = req.body

  if (typeof apiKey !== 'string') return res.status(401).send({ error: 'No api-key' })
  const key = await prisma.apikey.findUnique({
    where: { id: apiKey },
    select: { admin: true, activ: true },
  })

  if (!key?.activ || !key.admin) return res.status(401).send({ error: 'No rights' })

  const newKey = await prisma.apikey.create({
    data: {
      admin: Boolean(admin),
    },
  })

  res.json({ [API_KEY_HEADER]: newKey.id })
}
