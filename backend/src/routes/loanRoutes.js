import express from 'express'
import { submitLoan, getAllLoans, approveLoan, denyLoan } from '../controllers/loanController.js'
import { validateRequest } from '../middleware/validation.js'
import { loanSchema } from '../utils/validators.js'
import { authenticateToken, authorizeLoanAdmin } from '../middleware/auth.js'

const router = express.Router()

// Public route - submit loan (with Zod validation)
router.post('/submit', validateRequest(loanSchema), submitLoan)

// Admin routes - require authentication
router.get('/', authenticateToken, authorizeLoanAdmin, getAllLoans)
router.patch('/:id/approve', authenticateToken, authorizeLoanAdmin, approveLoan)
router.patch('/:id/deny', authenticateToken, authorizeLoanAdmin, denyLoan)

export default router