import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1] // Bearer TOKEN

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Access denied. No token provided.'
      })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token.'
    })
  }
}

export const verifyConsultationAdmin = (req, res, next) => {
  try {
    if (req.user.role !== 'consultation') {
      return res.status(403).json({
        success: false,
        message: 'Access denied. Consultation admin only.'
      })
    }
    next()
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: 'Authorization failed.'
    })
  }
}

export const verifyLoanAdmin = (req, res, next) => {
  try {
    if (req.user.role !== 'loan') {
      return res.status(403).json({
        success: false,
        message: 'Access denied. Loan admin only.'
      })
    }
    next()
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: 'Authorization failed.'
    })
  }
}