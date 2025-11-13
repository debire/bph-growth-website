import express from 'express'
import {
  submitConsultation,
  getAllConsultations,
  getConsultationById,
  approveConsultation,
  denyConsultation,
  deleteConsultation
} from '../controllers/consultationController.js'
import { verifyToken, verifyConsultationAdmin } from '../middleware/auth.js'
import { validateRequest } from '../middleware/validation.js'
import { consultationSchema } from '../utils/validators.js'

const router = express.Router()

// Public route
router.post('/submit', validateRequest(consultationSchema), submitConsultation)

// Protected routes (Consultation Admin only)
router.get('/', verifyToken, verifyConsultationAdmin, getAllConsultations)
router.get('/:id', verifyToken, verifyConsultationAdmin, getConsultationById)
router.patch('/:id/approve', verifyToken, verifyConsultationAdmin, approveConsultation)
router.patch('/:id/deny', verifyToken, verifyConsultationAdmin, denyConsultation)
router.delete('/:id', verifyToken, verifyConsultationAdmin, deleteConsultation)

export default router