import { Router } from 'express'

import { getHighligtsToBook, getRndHighlights, search } from '../controller/highlights.controller'

const router = Router()

router.get('/', getRndHighlights)
router.get('/search', search)
router.get('/tobook', getHighligtsToBook)

export default router
