import { Router } from 'express'
import { getRndHighlights, search } from '../controller/highlights.controller'

const router = Router()

router.get('/', getRndHighlights)
router.get('/search', search)

export default router
