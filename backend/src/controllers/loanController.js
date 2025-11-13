import { prisma } from '../config/database.js'
import { sendEmail } from '../config/email.js'
import {
  loanUserTemplate,
  loanAdminTemplate,
  approvalTemplate,
  denialTemplate
} from '../utils/emailTemplates.js'

// Submit loan application
export const submitLoan = async (req, res) => {
  try {
    const loanData = req.body

    // Save to database
    const loan = await prisma.loanApplication.create({
      data: loanData
    })

    // Send confirmation email to user
    await sendEmail({
      to: loanData.email,
      subject: 'Loan Application Received - BPH Growth Fund',
      html: loanUserTemplate(loanData)
    })

    // Send notification email to business
    await sendEmail({
      to: process.env.BUSINESS_EMAIL,
      subject: `New Loan Application - ${loanData.loanType}`,
      html: loanAdminTemplate({ ...loanData, id: loan.id })
    })

    res.status(201).json({
      success: true,
      message: 'Loan application submitted successfully',
      data: loan
    })
  } catch (error) {
    console.error('Error submitting loan:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to submit loan application',
      error: error.message
    })
  }
}

// Get all loan applications (Admin)
export const getAllLoans = async (req, res) => {
  try {
    const { status, loanType, page = 1, limit = 10 } = req.query

    const where = {}
    if (status) where.status = status
    if (loanType) where.loanType = loanType

    const skip = (page - 1) * limit

    const [loans, total] = await Promise.all([
      prisma.loanApplication.findMany({
        where,
        skip: parseInt(skip),
        take: parseInt(limit),
        orderBy: { submittedAt: 'desc' }
      }),
      prisma.loanApplication.count({ where })
    ])

    res.status(200).json({
      success: true,
      data: loans,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Error fetching loans:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch loan applications',
      error: error.message
    })
  }
}

// Get single loan application (Admin)
export const getLoanById = async (req, res) => {
  try {
    const { id } = req.params

    const loan = await prisma.loanApplication.findUnique({
      where: { id }
    })

    if (!loan) {
      return res.status(404).json({
        success: false,
        message: 'Loan application not found'
      })
    }

    res.status(200).json({
      success: true,
      data: loan
    })
  } catch (error) {
    console.error('Error fetching loan:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch loan application',
      error: error.message
    })
  }
}

// Approve loan (Admin)
export const approveLoan = async (req, res) => {
  try {
    const { id } = req.params

    const loan = await prisma.loanApplication.update({
      where: { id },
      data: { status: 'approved' }
    })

    // Send approval email to user
    await sendEmail({
      to: loan.email,
      subject: 'Loan Application Approved - BPH Growth Fund',
      html: approvalTemplate(loan, 'loan')
    })

    res.status(200).json({
      success: true,
      message: 'Loan approved successfully',
      data: loan
    })
  } catch (error) {
    console.error('Error approving loan:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to approve loan',
      error: error.message
    })
  }
}

// Deny loan (Admin)
export const denyLoan = async (req, res) => {
  try {
    const { id } = req.params

    const loan = await prisma.loanApplication.update({
      where: { id },
      data: { status: 'denied' }
    })

    // Send denial email to user
    await sendEmail({
      to: loan.email,
      subject: 'Loan Application Update - BPH Growth Fund',
      html: denialTemplate(loan, 'loan')
    })

    res.status(200).json({
      success: true,
      message: 'Loan denied',
      data: loan
    })
  } catch (error) {
    console.error('Error denying loan:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to deny loan',
      error: error.message
    })
  }
}

// Delete loan application (Admin)
export const deleteLoan = async (req, res) => {
  try {
    const { id } = req.params

    await prisma.loanApplication.delete({
      where: { id }
    })

    res.status(200).json({
      success: true,
      message: 'Loan application deleted successfully'
    })
  } catch (error) {
    console.error('Error deleting loan:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to delete loan application',
      error: error.message
    })
  }
}