import { prisma } from '../config/database.js'
import { sendEmail } from '../config/email.js'
import { consultationUserTemplate, consultationAdminTemplate } from '../utils/emailTemplates.js'

// Submit consultation application
export const submitConsultation = async (req, res) => {
  try {
    const {
      fullName,
      businessEmail,
      companyName,
      industrySector,
      currentBusinessStage,
      primaryServiceInterest,
      targetFundingAmount,
      businessSummary,
      slotId
    } = req.body

    console.log('📥 Consultation submission:', { 
      fullName, 
      businessEmail, 
      slotId 
    })

    // Get the slot details
    const slot = await prisma.availableSlot.findUnique({
      where: { id: slotId }
    })

    if (!slot) {
      return res.status(400).json({
        success: false,
        message: 'Invalid time slot selected'
      })
    }

    if (slot.isBooked) {
      return res.status(400).json({
        success: false,
        message: 'This time slot has already been booked'
      })
    }

    // Create consultation application
    const consultation = await prisma.consultationApplication.create({
      data: {
        fullName,
        businessEmail,
        companyName,
        industrySector,
        currentBusinessStage,
        primaryServiceInterest,
        targetFundingAmount: targetFundingAmount || null,
        businessSummary,
        scheduledDate: slot.date,
        scheduledTime: slot.time,
        status: 'pending'
      }
    })

    // Mark slot as booked
    await prisma.availableSlot.update({
      where: { id: slotId },
      data: { isBooked: true }
    })

    console.log('✅ Consultation created:', consultation.id)

    // Send confirmation emails (if Resend is configured)
    try {
      // Send to user
      await sendEmail({
        to: businessEmail,
        subject: 'Consultation Scheduled - BPH Growth',
        html: consultationUserTemplate({
          ...consultation,
          scheduledDate: slot.date,
          scheduledTime: slot.time
        })
      })

      // Send to admin
      await sendEmail({
        to: process.env.BUSINESS_EMAIL,
        subject: 'New Consultation Application',
        html: consultationAdminTemplate({
          ...consultation,
          scheduledDate: slot.date,
          scheduledTime: slot.time
        })
      })

      console.log('✅ Emails sent successfully')
    } catch (emailError) {
      console.error('⚠️ Email sending failed:', emailError.message)
      // Don't fail the request if email fails
    }

    res.status(201).json({
      success: true,
      message: 'Consultation application submitted successfully',
      data: consultation
    })
  } catch (error) {
    console.error('❌ Error submitting consultation:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to submit consultation application',
      error: error.message
    })
  }
}

// Get all consultation applications (admin only)
export const getAllConsultations = async (req, res) => {
  try {
    const consultations = await prisma.consultationApplication.findMany({
      orderBy: {
        submittedAt: 'desc'
      }
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

// Approve consultation
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

// Deny consultation
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