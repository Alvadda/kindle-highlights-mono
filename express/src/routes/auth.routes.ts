import { Router } from 'express'

import { create, remove } from '../controller/auth.controller'
import { isAdmin } from '../middleware/apikey.middleware'

const router = Router()

router.post('/', isAdmin, create)
router.delete('/', isAdmin, remove)

export default router
