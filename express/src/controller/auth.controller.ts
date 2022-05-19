import { Request, Response } from 'express'

import { createKey, deleteKey } from '../services/apikey.service'
import { API_KEY_HEADER } from '../utils/constants'

export async function create(req: Request, res: Response) {
  const { admin } = req.body

  const newKey = await createKey(Boolean(admin))

  res.json({ [API_KEY_HEADER]: newKey.id })
}

export async function remove(req: Request, res: Response) {
  const { key } = req.body

  if (typeof key !== 'string') return res.sendStatus(400)

  const { error } = await deleteKey(key)
  if (error) return res.sendStatus(409)

  res.sendStatus(202)
}
