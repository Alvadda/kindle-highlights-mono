import { Injectable } from '@nestjs/common'
import { db } from './utils/db'

@Injectable()
export class AppService {
  async getRndHighlights(numberOfHighlights = 5) {
    const highlights = await db.highlight.findMany({
      select: { Book: true, page: true, text: true },
    })
    return highlights.sort(() => Math.random() - Math.random()).slice(0, numberOfHighlights)
  }
}
