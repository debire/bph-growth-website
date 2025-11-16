import { prisma } from '../config/database.js'

// Track resource download
export const trackDownload = async (req, res) => {
  try {
    const { email, resourceId, resourceTitle } = req.body

    // Create download record
    const download = await prisma.resourceDownload.create({
      data: {
        email,
        resourceId,
        resourceTitle
      }
    })

    res.status(201).json({
      success: true,
      message: 'Download tracked successfully',
      data: download
    })
  } catch (error) {
    console.error('Error tracking download:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to track download',
      error: error.message
    })
  }
}

// Get all downloads (admin only)
export const getDownloads = async (req, res) => {
  try {
    const downloads = await prisma.resourceDownload.findMany({
      orderBy: {
        downloadedAt: 'desc'
      }
    })

    // Get download statistics
    const stats = {
      total: downloads.length,
      byResource: {},
      uniqueUsers: new Set(downloads.map(d => d.email)).size
    }

    // Count downloads by resource
    downloads.forEach(download => {
      if (!stats.byResource[download.resourceTitle]) {
        stats.byResource[download.resourceTitle] = 0
      }
      stats.byResource[download.resourceTitle]++
    })

    res.status(200).json({
      success: true,
      data: {
        downloads,
        stats
      }
    })
  } catch (error) {
    console.error('Error fetching downloads:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch downloads',
      error: error.message
    })
  }
}