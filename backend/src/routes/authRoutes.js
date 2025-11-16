import express from 'express'
import { consultationAdminLogin, loanAdminLogin, verifyToken, logout } from '../controllers/authController.js'
import { validateRequest } from '../middleware/validation.js'
import { loginSchema } from '../utils/validators.js'
import { authenticateToken } from '../middleware/auth.js'

const router = express.Router()

// Login routes (with Zod validation)
router.post('/consultation/login', validateRequest(loginSchema), consultationAdminLogin)
router.post('/loan/login', validateRequest(loginSchema), loanAdminLogin)

// Token verification
router.get('/verify', authenticateToken, verifyToken)

// Logout
router.post('/logout', logout)

export default router