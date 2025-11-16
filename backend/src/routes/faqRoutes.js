import express from 'express'
import {
  getAllFAQs,
  getAllFAQsAdmin,
  createFAQ,
  updateFAQ,
  deleteFAQ,
  toggleFAQStatus
} from '../controllers/faqController.js'
import { authenticateToken, authorizeAdmin } from '../middleware/auth.js'

const router = express.Router()

// Public route
router.get('/', getAllFAQs)

// Admin routes (require authentication)
router.get('/admin', authenticateToken, authorizeAdmin, getAllFAQsAdmin)
router.post('/', authenticateToken, authorizeAdmin, createFAQ)
router.put('/:id', authenticateToken, authorizeAdmin, updateFAQ)
router.delete('/:id', authenticateToken, authorizeAdmin, deleteFAQ)
router.patch('/:id/toggle', authenticateToken, authorizeAdmin, toggleFAQStatus)

export default router