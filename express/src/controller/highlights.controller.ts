import { Request, Response } from 'express'

import { isNill, isNumber } from '../utils'
import { prisma } from '../utils/db'

export async function getRndHighlights(req: Request, res: Response) {
  const { numberOfHighlights } = req.query

  let amount = 5

  if (isNill(numberOfHighlights) || isNumber(numberOfHighlights)) amount = Number(numberOfHighlights)

  const highlights = await prisma.highlight.findMany({
    select: { book: true, page: true, text: true },
  })
  const rndHighlights = highlights.sort(() => Math.random() - Math.random()).slice(0, amount)
  res.json(rndHighlights)
}
