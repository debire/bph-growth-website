import jwt from 'jsonwebtoken'

// Authenticate JWT token
export const authenticateToken = (req, res, next) => {
  try {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1] // Bearer TOKEN

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Access denied. No token provided.'
      })
    }

    // Verify token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({
          success: false,
          message: 'Invalid or expired token'
        })
      }

      req.user = decoded
      next()
    })
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Token authentication failed'
    })
  }
}

// Authorize consultation admin
export const authorizeConsultationAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'consultation') {
    next()
  } else {
    return res.status(403).json({
      success: false,
      message: 'Access denied. Consultation admin role required.'
    })
  }
}

// Authorize loan admin
export const authorizeLoanAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'loan') {
    next()
  } else {
    return res.status(403).json({
      success: false,
      message: 'Access denied. Loan admin role required.'
    })
  }
}

// Authorize any admin
export const authorizeAdmin = (req, res, next) => {
  if (req.user && (req.user.role === 'consultation' || req.user.role === 'loan')) {
    next()
  } else {
    return res.status(403).json({
      success: false,
      message: 'Access denied. Admin role required.'
    })
  }
}