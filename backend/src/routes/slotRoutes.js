import express from 'express'
import {
  getAvailableSlots,
  getAllSlots,
  createSlot,
  createMultipleSlots,
  deleteSlot
} from '../controllers/slotController.js'
import { verifyToken, verifyConsultationAdmin } from '../middleware/auth.js' // CHANGED THIS

const router = express.Router()

// Public route - get available slots for users
router.get('/available', getAvailableSlots)

// Protected routes - admin only
router.get('/all', verifyToken, getAllSlots) // CHANGED
router.post('/create', verifyToken, verifyConsultationAdmin, createSlot) // CHANGED
router.post('/create-multiple', verifyToken, verifyConsultationAdmin, createMultipleSlots) // CHANGED
router.delete('/:id', verifyToken, verifyConsultationAdmin, deleteSlot) // CHANGED

export default router