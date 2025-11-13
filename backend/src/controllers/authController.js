import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { prisma } from '../config/database.js'

// Generate JWT token
const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  )
}

// Consultation Admin Login
export const consultationAdminLogin = async (req, res) => {
  try {
    const { username, password } = req.body

    // Find admin
    const admin = await prisma.consultationAdmin.findUnique({
      where: { username }
    })

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: 'Invalid username or password'
      })
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, admin.password)

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid username or password'
      })
    }

    // Generate token
    const token = generateToken(admin)

    res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: admin.id,
        username: admin.username,
        role: admin.role
      }
    })
  } catch (error) {
    console.error('Consultation admin login error:', error)
    res.status(500).json({
      success: false,
      message: 'Login failed',
      error: error.message
    })
  }
}

// Loan Admin Login
export const loanAdminLogin = async (req, res) => {
  try {
    const { username, password } = req.body

    // Find admin
    const admin = await prisma.loanAdmin.findUnique({
      where: { username }
    })

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: 'Invalid username or password'
      })
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, admin.password)

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid username or password'
      })
    }

    // Generate token
    const token = generateToken(admin)

    res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: admin.id,
        username: admin.username,
        role: admin.role
      }
    })
  } catch (error) {
    console.error('Loan admin login error:', error)
    res.status(500).json({
      success: false,
      message: 'Login failed',
      error: error.message
    })
  }
}

// Verify token
export const verifyToken = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      user: req.user
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Token verification failed'
    })
  }
}

// Logout (client-side handles token removal)
export const logout = async (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Logged out successfully'
  })
}