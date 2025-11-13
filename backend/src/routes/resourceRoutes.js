import express from 'express'
import {
  requestResourceDownload,
  getAllResourceDownloads
} from '../controllers/resourceController.js'
import { verifyToken } from '../middleware/auth.js'
import { validateRequest } from '../middleware/validation.js'
import { resourceRequestSchema } from '../utils/validators.js'

const router = express.Router()

// Public route
router.post('/request', validateRequest(resourceRequestSchema), requestResourceDownload)

// Protected route (Any admin)
router.get('/downloads', verifyToken, getAllResourceDownloads)

export default router