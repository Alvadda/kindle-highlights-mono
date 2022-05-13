import { Router } from 'express'

import { getAllBooks } from '../controller/books.controller'

const router = Router()

router.get('/', getAllBooks)

export default router
