import { Request, Response, NextFunction } from 'express'
import { readKey } from '../services/apikey.service'

import { API_KEY_HEADER } from '../utils/constants'

export async function isKeyValid(req: Request, res: Response, next: NextFunction) {
  const apiKey = req.headers[API_KEY_HEADER]

  if (typeof apiKey !== 'string') return res.status(401).send({ error: 'No api-key' })

  const existKey = await readKey(apiKey)
  if (!existKey || !existKey.activ) return res.status(401).send({ error: 'Invalid api-key' })

  next()
}

export async function isAdmin(req: Request, res: Response, next: NextFunction) {
  const apiKey = req.headers[API_KEY_HEADER]

  if (typeof apiKey !== 'string') return res.status(401).send({ error: 'No api-key' })

  const key = await readKey(apiKey)

  if (!key?.activ || !key.admin) return res.status(401).send({ error: 'No rights' })

  next()
}
