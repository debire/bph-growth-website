import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Get all available slots (not booked) - PUBLIC
export const getAvailableSlots = async (req, res) => {
  try {
    const slots = await prisma.availableSlot.findMany({
      where: {
        isBooked: false,
        date: {
          gte: new Date() // Only future dates
        }
      },
      orderBy: [
        { date: 'asc' },
        { time: 'asc' }
      ]
    })

    // Group slots by date for easier frontend handling
    const groupedSlots = slots.reduce((acc, slot) => {
      const dateKey = slot.date.toISOString().split('T')[0]
      if (!acc[dateKey]) {
        acc[dateKey] = []
      }
      acc[dateKey].push({
        id: slot.id,
        time: slot.time,
        date: slot.date
      })
      return acc
    }, {})

    res.status(200).json({
      success: true,
      data: {
        slots: slots,
        groupedByDate: groupedSlots
      }
    })
  } catch (error) {
    console.error('Error fetching available slots:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch available slots',
      error: error.message
    })
  }
}

// Get all slots (for admin - includes booked ones) - PROTECTED
export const getAllSlots = async (req, res) => {
  try {
    const slots = await prisma.availableSlot.findMany({
      orderBy: [
        { date: 'asc' },
        { time: 'asc' }
      ]
    })

    res.status(200).json({
      success: true,
      data: slots
    })
  } catch (error) {
    console.error('Error fetching slots:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch slots',
      error: error.message
    })
  }
}

// Create new time slot - PROTECTED
export const createSlot = async (req, res) => {
  try {
    const { date, time } = req.body

    if (!date || !time) {
      return res.status(400).json({
        success: false,
        message: 'Date and time are required'
      })
    }

    // Check if slot already exists
    const existingSlot = await prisma.availableSlot.findFirst({
      where: {
        date: new Date(date),
        time
      }
    })

    if (existingSlot) {
      return res.status(400).json({
        success: false,
        message: 'This time slot already exists'
      })
    }

    const slot = await prisma.availableSlot.create({
      data: {
        date: new Date(date),
        time,
        isBooked: false
      }
    })

    res.status(201).json({
      success: true,
      message: 'Time slot created successfully',
      data: slot
    })
  } catch (error) {
    console.error('Error creating slot:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to create slot',
      error: error.message
    })
  }
}

// Create multiple slots at once - PROTECTED
export const createMultipleSlots = async (req, res) => {
  try {
    const { dates, times } = req.body

    if (!dates || !times || !Array.isArray(dates) || !Array.isArray(times)) {
      return res.status(400).json({
        success: false,
        message: 'Dates and times must be arrays'
      })
    }

    const slotsToCreate = []
    
    for (const date of dates) {
      for (const time of times) {
        // Check if slot already exists
        const existingSlot = await prisma.availableSlot.findFirst({
          where: {
            date: new Date(date),
            time
          }
        })

        if (!existingSlot) {
          slotsToCreate.push({
            date: new Date(date),
            time,
            isBooked: false
          })
        }
      }
    }

    if (slotsToCreate.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'All specified slots already exist'
      })
    }

    const slots = await prisma.availableSlot.createMany({
      data: slotsToCreate
    })

    res.status(201).json({
      success: true,
      message: `${slots.count} time slot(s) created successfully`,
      data: { count: slots.count }
    })
  } catch (error) {
    console.error('Error creating multiple slots:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to create slots',
      error: error.message
    })
  }
}

// Delete time slot - PROTECTED
export const deleteSlot = async (req, res) => {
  try {
    const { id } = req.params

    // Check if slot exists and is booked
    const slot = await prisma.availableSlot.findUnique({
      where: { id }
    })

    if (!slot) {
      return res.status(404).json({
        success: false,
        message: 'Time slot not found'
      })
    }

    if (slot.isBooked) {
      return res.status(400).json({
        success: false,
        message: 'Cannot delete a booked slot. Please cancel the associated consultation first.'
      })
    }

    await prisma.availableSlot.delete({
      where: { id }
    })

    res.status(200).json({
      success: true,
      message: 'Time slot deleted successfully'
    })
  } catch (error) {
    console.error('Error deleting slot:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to delete slot',
      error: error.message
    })
  }
}