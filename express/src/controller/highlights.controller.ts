import { Request, Response } from 'express'

import { isNill, isNumber } from '../utils'
import { prisma } from '../utils/db'

async function getHighlights() {
  return await prisma.highlight.findMany({
    select: { book: true, page: true, text: true },
  })
}

export async function getRndHighlights(req: Request, res: Response) {
  const { numberOfHighlights } = req.query

  let amount = 5

  if (isNill(numberOfHighlights) || isNumber(numberOfHighlights)) amount = Number(numberOfHighlights)

  const highlights = await getHighlights()
  const rndHighlights = highlights.sort(() => Math.random() - Math.random()).slice(0, amount)
  res.json(rndHighlights)
}

export async function search(req: Request, res: Response) {
  const { filter } = req.query

  if (typeof filter !== 'string') return res.sendStatus(400)

  const highlights = await getHighlights()

  const searchResult = highlights.filter((highlight) => highlight.text.includes(filter))

  res.json(searchResult)
}
