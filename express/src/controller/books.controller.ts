import { Request, Response } from 'express'

import { prisma } from '../utils/db'

async function readBooks() {
  return await prisma.book.findMany()
}

export async function getAllBooks(req: Request, res: Response) {
  const books = await readBooks()

  res.json(books)
}
