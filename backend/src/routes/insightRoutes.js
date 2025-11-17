import express from 'express'
import {
  createInsight,
  getAllInsights,
  getAllInsightsAdmin,
  getInsightById,
  updateInsight,
  deleteInsight,
  toggleInsightStatus,
  uploadImage
} from '../controllers/insightController.js'
import { upload } from '../utils/uploadHelper.js'
import { authenticateToken, authorizeAdmin } from '../middleware/auth.js'

const router = express.Router()

// Public routes
router.get('/', getAllInsights)

// Admin routes (MUST come BEFORE /:id route!)
router.get('/admin', authenticateToken, authorizeAdmin, getAllInsightsAdmin)
router.post('/', authenticateToken, authorizeAdmin, createInsight)
router.post('/upload-image', authenticateToken, authorizeAdmin, upload.single('image'), uploadImage)
router.put('/:id', authenticateToken, authorizeAdmin, updateInsight)
router.delete('/:id', authenticateToken, authorizeAdmin, deleteInsight)
router.patch('/:id/toggle', authenticateToken, authorizeAdmin, toggleInsightStatus)

// Dynamic ID route (MUST come LAST!)
router.get('/:id', getInsightById)

export default router