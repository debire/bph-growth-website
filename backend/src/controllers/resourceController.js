import { prisma } from '../config/database.js'
import { sendEmail } from '../config/email.js'
import { resourceDownloadTemplate } from '../utils/emailTemplates.js'

// Request resource download
export const requestResourceDownload = async (req, res) => {
  try {
    const { email, resourceId, resourceTitle } = req.body

    // Save download record
    const download = await prisma.resourceDownload.create({
      data: {
        email,
        resourceId,
        resourceTitle
      }
    })

    // Send resource to user's email
    await sendEmail({
      to: email,
      subject: `Your Resource: ${resourceTitle}`,
      html: resourceDownloadTemplate(email, resourceTitle)
    })

    // TODO: Attach actual file to email
    // You'll need to implement file attachment with Resend
    // or provide a download link to the file hosted on Cloudinary

    res.status(200).json({
      success: true,
      message: 'Resource will be sent to your email shortly',
      data: download
    })
  } catch (error) {
    console.error('Error requesting resource:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to send resource',
      error: error.message
    })
  }
}

// Get all resource downloads (Admin)
export const getAllResourceDownloads = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query
    const skip = (page - 1) * limit

    const [downloads, total] = await Promise.all([
      prisma.resourceDownload.findMany({
        skip: parseInt(skip),
        take: parseInt(limit),
        orderBy: { downloadedAt: 'desc' }
      }),
      prisma.resourceDownload.count()
    ])

    res.status(200).json({
      success: true,
      data: downloads,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Error fetching downloads:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch resource downloads',
      error: error.message
    })
  }
}