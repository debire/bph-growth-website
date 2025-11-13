import express from 'express'
import {
  consultationAdminLogin,
  loanAdminLogin,
  verifyToken as verifyTokenController,
  logout
} from '../controllers/authController.js'
import { verifyToken } from '../middleware/auth.js'
import { validateRequest } from '../middleware/validation.js'
import { loginSchema } from '../utils/validators.js'

const router = express.Router()

// Login routes
router.post('/consultation/login', validateRequest(loginSchema), consultationAdminLogin)
router.post('/loan/login', validateRequest(loginSchema), loanAdminLogin)

// Token verification
router.get('/verify', verifyToken, verifyTokenController)

// Logout
router.post('/logout', logout)

export default router