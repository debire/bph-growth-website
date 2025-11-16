import express from 'express'
import {
  createInsight,
  getAllInsights,
  getInsightById,
  updateInsight,
  deleteInsight,
  toggleInsightStatus
} from '../controllers/insightController.js'
import { upload } from '../utils/uploadHelper.js'
import { authenticateToken, authorizeAdmin } from '../middleware/auth.js'

const router = express.Router()

// Public routes
router.get('/', getAllInsights)
router.get('/:id', getInsightById)

// Admin routes (require authentication)
router.post('/', authenticateToken, authorizeAdmin, upload.single('image'), createInsight)
router.put('/:id', authenticateToken, authorizeAdmin, upload.single('image'), updateInsight)
router.delete('/:id', authenticateToken, authorizeAdmin, deleteInsight)
router.patch('/:id/toggle', authenticateToken, authorizeAdmin, toggleInsightStatus)

export default router