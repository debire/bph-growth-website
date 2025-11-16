import express from 'express'
import {
  createSlot,
  createMultipleSlots,
  getAllSlots,
  getAvailableSlots,
  deleteSlot
} from '../controllers/slotController.js'
import { authenticateToken, authorizeConsultationAdmin } from '../middleware/auth.js' // FIX THIS LINE

const router = express.Router()

// Public routes
router.get('/available', getAvailableSlots)

// Admin routes - require consultation admin authentication
router.post('/create', authenticateToken, authorizeConsultationAdmin, createSlot)
router.post('/create-multiple', authenticateToken, authorizeConsultationAdmin, createMultipleSlots)
router.get('/all', authenticateToken, authorizeConsultationAdmin, getAllSlots)
router.delete('/:id', authenticateToken, authorizeConsultationAdmin, deleteSlot)

export default router