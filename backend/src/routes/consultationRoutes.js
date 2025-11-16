import express from 'express'
import { submitConsultation, getAllConsultations, approveConsultation, denyConsultation } from '../controllers/consultationController.js'
import { validateRequest } from '../middleware/validation.js'
import { consultationSchema } from '../utils/validators.js'
import { authenticateToken, authorizeConsultationAdmin } from '../middleware/auth.js'

const router = express.Router()

// Public route - submit consultation (with Zod validation)
router.post('/submit', validateRequest(consultationSchema), submitConsultation)

// Admin routes - require authentication
router.get('/', authenticateToken, authorizeConsultationAdmin, getAllConsultations)
router.patch('/:id/approve', authenticateToken, authorizeConsultationAdmin, approveConsultation)
router.patch('/:id/deny', authenticateToken, authorizeConsultationAdmin, denyConsultation)

export default router