import { Router } from 'express'

import { createApiKey } from '../controller/auth.controller'

const router = Router()

router.post('/', createApiKey)

export default router
