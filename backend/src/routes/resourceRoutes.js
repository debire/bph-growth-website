import express from 'express'
import { trackDownload, getDownloads } from '../controllers/resourceController.js'
import { validateRequest } from '../middleware/validation.js'
import { resourceRequestSchema } from '../utils/validators.js'
import { authenticateToken } from '../middleware/auth.js'

const router = express.Router()

// Track resource download (with Zod validation)
router.post('/download', validateRequest(resourceRequestSchema), trackDownload)

// Get all downloads (admin only)
router.get('/downloads', authenticateToken, getDownloads)

export default router