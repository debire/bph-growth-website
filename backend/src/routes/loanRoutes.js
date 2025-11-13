import express from 'express'
import {
  submitLoan,
  getAllLoans,
  getLoanById,
  approveLoan,
  denyLoan,
  deleteLoan
} from '../controllers/loanController.js'
import { verifyToken, verifyLoanAdmin } from '../middleware/auth.js'
import { validateRequest } from '../middleware/validation.js'
import { loanSchema } from '../utils/validators.js'

const router = express.Router()

// Public route
router.post('/submit', validateRequest(loanSchema), submitLoan)

// Protected routes (Loan Admin only)
router.get('/', verifyToken, verifyLoanAdmin, getAllLoans)
router.get('/:id', verifyToken, verifyLoanAdmin, getLoanById)
router.patch('/:id/approve', verifyToken, verifyLoanAdmin, approveLoan)
router.patch('/:id/deny', verifyToken, verifyLoanAdmin, denyLoan)
router.delete('/:id', verifyToken, verifyLoanAdmin, deleteLoan)

export default router