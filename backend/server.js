import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDatabase } from './src/config/database.js'
import { errorHandler, notFound } from './src/middleware/errorHandler.js'

// Import routes
import consultationRoutes from './src/routes/consultationRoutes.js'
import loanRoutes from './src/routes/loanRoutes.js'
import authRoutes from './src/routes/authRoutes.js'
import resourceRoutes from './src/routes/resourceRoutes.js'
import slotRoutes from './src/routes/slotRoutes.js' // ADD THIS

// Load environment variables
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Connect to database
connectDatabase()

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`)
  next()
})

// Basic routes
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'BPH Growth API is running!',
    version: '1.0.0',
    endpoints: {
      consultations: '/api/consultations',
      loans: '/api/loans',
      auth: '/api/auth',
      resources: '/api/resources',
      slots: '/api/slots' // ADD THIS
    }
  })
})

app.get('/health', (req, res) => {
  res.json({
    success: true,
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  })
})

// API Routes
app.use('/api/consultations', consultationRoutes)
app.use('/api/loans', loanRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/resources', resourceRoutes)
app.use('/api/slots', slotRoutes) // ADD THIS

// Error handling
app.use(notFound)
app.use(errorHandler)

// Start server
app.listen(PORT, () => {
  console.log('=================================')
  console.log(`✅ Server running on http://localhost:${PORT}`)
  console.log(`🔒 Environment: ${process.env.NODE_ENV || 'development'}`)
  console.log(`🌐 Frontend URL: ${process.env.FRONTEND_URL}`)
  console.log('=================================')
})

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('❌ Uncaught Exception:', error)
  process.exit(1)
})

// Handle unhandled promise rejections
process.on('unhandledRejection', (error) => {
  console.error('❌ Unhandled Rejection:', error)
  process.exit(1)
})