import { prisma } from '../config/database.js'
import { sendEmail } from '../config/email.js'
import { consultationUserTemplate, consultationAdminTemplate } from '../utils/emailTemplates.js'
import { consultationSchema } from '../utils/validators.js'

// Submit consultation application
export const submitConsultation = async (req, res) => {
  try {
    const consultationData = req.body

    console.log('📥 Received consultation data:', consultationData)

    // Validate input
    try {
      consultationSchema.parse(consultationData)
    } catch (validationError) {
      console.error('❌ Validation error:', validationError.errors)
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validationError.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message
        }))
      })
    }

    // Check if the selected slot exists and is available
    const slot = await prisma.availableSlot.findUnique({
      where: { id: consultationData.slotId }
    })

    if (!slot) {
      return res.status(400).json({
        success: false,
        message: 'Selected time slot not found'
      })
    }

    if (slot.isBooked) {
      return res.status(400).json({
        success: false,
        message: 'Selected time slot is no longer available'
      })
    }

    // Save consultation to database
    const consultation = await prisma.consultationApplication.create({
      data: {
        fullName: consultationData.fullName,
        businessEmail: consultationData.businessEmail,
        companyName: consultationData.companyName,
        industrySector: consultationData.industrySector,
        currentBusinessStage: consultationData.currentBusinessStage,
        primaryServiceInterest: consultationData.primaryServiceInterest,
        targetFundingAmount: consultationData.targetFundingAmount || null,
        businessSummary: consultationData.businessSummary,
        scheduledDate: slot.date,
        scheduledTime: slot.time
      }
    })

    // Mark slot as booked
    await prisma.availableSlot.update({
      where: { id: slot.id },
      data: { isBooked: true }
    })

    console.log('✅ Consultation saved:', consultation.id)

    // Send confirmation email to user
    await sendEmail({
      to: consultationData.businessEmail,
      subject: 'Consultation Scheduled - BPH Growth',
      html: consultationUserTemplate(consultation)
    })

    // Send notification email to business
    await sendEmail({
      to: process.env.BUSINESS_EMAIL,
      subject: `New Consultation Request from ${consultationData.companyName}`,
      html: consultationAdminTemplate(consultation)
    })

    res.status(201).json({
      success: true,
      message: 'Consultation request submitted successfully',
      data: consultation
    })
  } catch (error) {
    console.error('Error submitting consultation:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to submit consultation request',
      error: error.message
    })
  }
}

// Rest of your existing functions stay the same
export const getAllConsultations = async (req, res) => {
  try {
    const consultations = await prisma.consultationApplication.findMany({
      orderBy: { submittedAt: 'desc' }
    })

    res.status(200).json({
      success: true,
      data: consultations
    })
  } catch (error) {
    console.error('Error fetching consultations:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch consultations',
      error: error.message
    })
  }
}

export const getConsultationById = async (req, res) => {
  try {
    const { id } = req.params

    const consultation = await prisma.consultationApplication.findUnique({
      where: { id }
    })

    if (!consultation) {
      return res.status(404).json({
        success: false,
        message: 'Consultation not found'
      })
    }

    res.status(200).json({
      success: true,
      data: consultation
    })
  } catch (error) {
    console.error('Error fetching consultation:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch consultation',
      error: error.message
    })
  }
}

export const approveConsultation = async (req, res) => {
  try {
    const { id } = req.params

    const consultation = await prisma.consultationApplication.update({
      where: { id },
      data: { status: 'approved' }
    })

    res.status(200).json({
      success: true,
      message: 'Consultation approved',
      data: consultation
    })
  } catch (error) {
    console.error('Error approving consultation:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to approve consultation',
      error: error.message
    })
  }
}

export const denyConsultation = async (req, res) => {
  try {
    const { id } = req.params

    const consultation = await prisma.consultationApplication.update({
      where: { id },
      data: { status: 'denied' }
    })

    res.status(200).json({
      success: true,
      message: 'Consultation denied',
      data: consultation
    })
  } catch (error) {
    console.error('Error denying consultation:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to deny consultation',
      error: error.message
    })
  }
}

export const deleteConsultation = async (req, res) => {
  try {
    const { id } = req.params

    await prisma.consultationApplication.delete({
      where: { id }
    })

    res.status(200).json({
      success: true,
      message: 'Consultation deleted successfully'
    })
  } catch (error) {
    console.error('Error deleting consultation:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to delete consultation',
      error: error.message
    })
  }
}