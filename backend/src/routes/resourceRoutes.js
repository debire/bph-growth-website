import express from 'express'
import multer from 'multer'
import path from 'path'
import { fileURLToPath } from 'url'
import {
  getAllResources,
  getAllResourcesAdmin,
  createResource,
  updateResource,
  deleteResource,
  toggleResourceStatus,
  trackDownload,
  uploadResourceImage
} from '../controllers/resourceController.js'
import { authenticateToken, authorizeAdmin } from '../middleware/auth.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

// Configure multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + '-' + file.originalname)
  }
})

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 50 * 1024 * 1024
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      'application/pdf',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-powerpoint',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/zip',
      'application/x-zip-compressed',
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/webp'
    ]

    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(new Error('Invalid file type'), false)
    }
  }
})

// File download route - serves files directly
router.get('/file/:filename', async (req, res) => {
  try {
    const { filename } = req.params
    const filePath = path.join(__dirname, '../../public/resources', filename)

    // Determine MIME type
    const ext = path.extname(filename).toLowerCase()
    const mimeTypes = {
      '.pdf': 'application/pdf',
      '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      '.xls': 'application/vnd.ms-excel',
      '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      '.ppt': 'application/vnd.ms-powerpoint',
      '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      '.doc': 'application/msword',
      '.zip': 'application/zip'
    }

    const mimeType = mimeTypes[ext] || 'application/octet-stream'

    res.setHeader('Content-Type', mimeType)
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`)
    res.sendFile(filePath)

    console.log(`📥 File served: ${filename}`)
  } catch (error) {
    console.error('Error serving file:', error)
    res.status(404).json({ success: false, message: 'File not found' })
  }
})

// Public routes
router.get('/', getAllResources)
router.post('/download', trackDownload)

// Admin routes
router.get('/admin', authenticateToken, authorizeAdmin, getAllResourcesAdmin)
router.post('/upload-image', authenticateToken, authorizeAdmin, upload.single('image'), uploadResourceImage)
router.post('/', authenticateToken, authorizeAdmin, upload.single('file'), createResource)
router.put('/:id', authenticateToken, authorizeAdmin, upload.single('file'), updateResource)
router.delete('/:id', authenticateToken, authorizeAdmin, deleteResource)
router.patch('/:id/toggle', authenticateToken, authorizeAdmin, toggleResourceStatus)

export default router