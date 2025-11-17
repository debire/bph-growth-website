// ==================== CONSULTATION EMAIL TEMPLATES ====================

// Consultation User Confirmation Email (after submission)
export const consultationUserTemplate = ({ fullName, scheduledDate, scheduledTime, companyName }) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 28px; }
        .content { padding: 40px 30px; }
        .info-box { background: #f8f9fa; padding: 20px; border-left: 4px solid #667eea; margin: 20px 0; border-radius: 4px; }
        .info-box h3 { margin: 0 0 15px 0; color: #667eea; }
        .footer { background-color: #1a2332; color: #ffffff; text-align: center; padding: 30px; }
        .footer p { margin: 5px 0; font-size: 14px; opacity: 0.8; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✅ Consultation Scheduled!</h1>
        </div>
        <div class="content">
          <p>Dear ${fullName},</p>
          
          <p>Thank you for scheduling a consultation with BPH Growth. We've received your request and are excited to discuss how we can help <strong>${companyName}</strong> grow.</p>
          
          <div class="info-box">
            <h3>📅 Your Consultation Details:</h3>
            <p><strong>Date:</strong> ${new Date(scheduledDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p><strong>Time:</strong> ${scheduledTime}</p>
            <p><strong>Status:</strong> Pending Confirmation</p>
          </div>
          
          <p>Our team will review your application and confirm your consultation within 24-48 hours. You'll receive an email once your consultation is approved.</p>
          
          <p><strong>What to Prepare:</strong></p>
          <ul>
            <li>Your business goals and challenges</li>
            <li>Any relevant business documents or data</li>
            <li>Questions about our services</li>
            <li>Information about your target market</li>
          </ul>
          
          <p>If you have any immediate questions, please don't hesitate to reach out to us at hello@bphgrowth.com</p>
          
          <p style="margin-top: 30px;">Best regards,<br><strong>The BPH Growth Team</strong></p>
        </div>
        <div class="footer">
          <p><strong>BPH Growth</strong></p>
          <p>23 Durojaiye Street, Surulere, Lagos, Nigeria</p>
          <p>hello@bphgrowth.com</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Consultation Admin Notification Email
export const consultationAdminTemplate = ({ fullName, businessEmail, companyName, industrySector, scheduledDate, scheduledTime, businessSummary }) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; }
        .content { padding: 30px; }
        .info-box { background: #f8f9fa; padding: 15px; margin: 15px 0; border-radius: 4px; }
        .info-box strong { color: #667eea; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🔔 New Consultation Request</h1>
        </div>
        <div class="content">
          <h2>Consultation Application Received</h2>
          
          <div class="info-box">
            <p><strong>Applicant:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${businessEmail}</p>
            <p><strong>Company:</strong> ${companyName}</p>
            <p><strong>Industry:</strong> ${industrySector}</p>
          </div>
          
          <div class="info-box">
            <p><strong>Scheduled Date:</strong> ${new Date(scheduledDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p><strong>Scheduled Time:</strong> ${scheduledTime}</p>
          </div>
          
          <div class="info-box">
            <p><strong>Business Summary:</strong></p>
            <p>${businessSummary}</p>
          </div>
          
          <p>Please log in to the admin dashboard to review and approve/deny this consultation request.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Consultation Approval Email
export const consultationApprovalTemplate = ({ fullName, scheduledDate, scheduledTime, companyName }) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 28px; }
        .content { padding: 40px 30px; }
        .info-box { background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%); padding: 20px; border-left: 4px solid #667eea; margin: 20px 0; border-radius: 4px; }
        .info-box h3 { margin: 0 0 15px 0; color: #667eea; }
        .success-badge { display: inline-block; background: #10b981; color: white; padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: 14px; margin: 10px 0; }
        .footer { background-color: #1a2332; color: #ffffff; text-align: center; padding: 30px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎉 Consultation Approved!</h1>
        </div>
        <div class="content">
          <p>Dear ${fullName},</p>
          
          <p><span class="success-badge">✓ APPROVED</span></p>
          
          <p>Great news! Your consultation request for <strong>${companyName}</strong> has been approved.</p>
          
          <div class="info-box">
            <h3>📅 Confirmed Consultation Details:</h3>
            <p><strong>Date:</strong> ${new Date(scheduledDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p><strong>Time:</strong> ${scheduledTime}</p>
          </div>
          
          <p>We're excited to meet with you and discuss how BPH Growth can help your business thrive!</p>
          
          <p><strong>Before Your Consultation:</strong></p>
          <ul>
            <li>Review your business goals and challenges</li>
            <li>Prepare any questions about our services</li>
            <li>Gather relevant business documents or data</li>
            <li>Be ready to discuss your growth strategy</li>
          </ul>
          
          <p><strong>Meeting Format:</strong> Our team will reach out to you via email or phone 24 hours before the consultation to confirm the meeting format (virtual or in-person) and provide any necessary joining details.</p>
          
          <p>If you need to reschedule or have any questions, please contact us at hello@bphgrowth.com</p>
          
          <p style="margin-top: 30px;">Looking forward to working with you!<br><strong>The BPH Growth Team</strong></p>
        </div>
        <div class="footer">
          <p><strong>BPH Growth</strong></p>
          <p>23 Durojaiye Street, Surulere, Lagos, Nigeria</p>
          <p>hello@bphgrowth.com</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Consultation Denial Email
export const consultationDenialTemplate = ({ fullName, companyName }) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 30px; text-align: center; }
        .content { padding: 40px 30px; }
        .info-box { background: #fff8f0; padding: 20px; border-left: 4px solid #f59e0b; margin: 20px 0; border-radius: 4px; }
        .cta-button { display: inline-block; background: #667eea; color: white !important; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 10px 5px; }
        .footer { background-color: #1a2332; color: #ffffff; text-align: center; padding: 30px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Consultation Status Update</h1>
        </div>
        <div class="content">
          <p>Dear ${fullName},</p>
          
          <p>Thank you for your interest in BPH Growth consultation services for <strong>${companyName}</strong>.</p>
          
          <div class="info-box">
            <p>After reviewing your application, we're unable to schedule a consultation at this time due to capacity constraints or service fit considerations.</p>
          </div>
          
          <p><strong>We're Still Here to Help!</strong></p>
          <p>While we can't offer a consultation right now, there are other ways we can support your business growth:</p>
          
          <ul>
            <li><strong>Free Resources</strong> - Access our library of business templates and guides</li>
            <li><strong>Business Insights</strong> - Read our latest articles on growth strategies</li>
            <li><strong>Self-Service Tools</strong> - Use our planning and financial tools</li>
            <li><strong>Apply Again</strong> - You're welcome to reapply when we have more availability</li>
          </ul>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://bphgrowth.com/resource-center" class="cta-button">Browse Free Resources</a>
            <a href="https://bphgrowth.com/blogs" class="cta-button">Read Insights</a>
          </div>
          
          <p>We appreciate your understanding and encourage you to stay connected with BPH Growth through our resources and content.</p>
          
          <p>For any questions, feel free to reach out to us at hello@bphgrowth.com</p>
          
          <p style="margin-top: 30px;">Best regards,<br><strong>The BPH Growth Team</strong></p>
        </div>
        <div class="footer">
          <p><strong>BPH Growth</strong></p>
          <p>23 Durojaiye Street, Surulere, Lagos, Nigeria</p>
          <p>hello@bphgrowth.com</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// ==================== PERSONAL LOAN EMAIL TEMPLATES ====================

// Personal Loan User Confirmation Email
export const personalLoanUserTemplate = ({ fullName, loanAmount }) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 30px; text-align: center; }
        .content { padding: 40px 30px; }
        .info-box { background: #f8f9fa; padding: 20px; border-left: 4px solid #667eea; margin: 20px 0; border-radius: 4px; }
        .footer { background-color: #1a2332; color: #ffffff; text-align: center; padding: 30px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✅ Loan Application Received!</h1>
        </div>
        <div class="content">
          <p>Dear ${fullName},</p>
          
          <p>Thank you for submitting your personal loan application with BPH Growth. We've successfully received your request.</p>
          
          <div class="info-box">
            <h3>💰 Application Summary:</h3>
            <p><strong>Applicant:</strong> ${fullName}</p>
            <p><strong>Loan Type:</strong> Personal Loan</p>
            <p><strong>Loan Amount:</strong> ${loanAmount}</p>
            <p><strong>Status:</strong> Under Review</p>
          </div>
          
          <p>Our loan specialists are reviewing your application and will get back to you within 3-5 business days.</p>
          
          <p><strong>Next Steps:</strong></p>
          <ul>
            <li>Our team will review your application and supporting documents</li>
            <li>We may contact you for additional information if needed</li>
            <li>You'll receive an email once a decision has been made</li>
          </ul>
          
          <p>If you have any questions in the meantime, please contact us at hello@bphgrowth.com</p>
          
          <p style="margin-top: 30px;">Best regards,<br><strong>The BPH Growth Loan Team</strong></p>
        </div>
        <div class="footer">
          <p><strong>BPH Growth</strong></p>
          <p>23 Durojaiye Street, Surulere, Lagos, Nigeria</p>
          <p>hello@bphgrowth.com</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Personal Loan Admin Notification
export const personalLoanAdminTemplate = ({ fullName, email, loanAmount, purposeOfLoan }) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; }
        .content { padding: 30px; }
        .info-box { background: #f8f9fa; padding: 15px; margin: 15px 0; border-radius: 4px; }
        .info-box strong { color: #667eea; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🔔 New Personal Loan Application</h1>
        </div>
        <div class="content">
          <h2>Personal Loan Application Received</h2>
          
          <div class="info-box">
            <p><strong>Applicant:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Loan Type:</strong> Personal Loan</p>
            <p><strong>Loan Amount:</strong> ${loanAmount}</p>
          </div>
          
          <div class="info-box">
            <p><strong>Purpose of Loan:</strong></p>
            <p>${purposeOfLoan}</p>
          </div>
          
          <p>Please log in to the admin dashboard to review this loan application.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Personal Loan Approval
export const personalLoanApprovalTemplate = ({ fullName, loanAmount }) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
        .header { background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 40px 30px; text-align: center; }
        .content { padding: 40px 30px; }
        .info-box { background: linear-gradient(135deg, #10b98115 0%, #05966915 100%); padding: 20px; border-left: 4px solid #10b981; margin: 20px 0; border-radius: 4px; }
        .success-badge { display: inline-block; background: #10b981; color: white; padding: 8px 16px; border-radius: 20px; font-weight: 600; margin: 10px 0; }
        .footer { background-color: #1a2332; color: #ffffff; text-align: center; padding: 30px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎉 Loan Application Approved!</h1>
        </div>
        <div class="content">
          <p>Dear ${fullName},</p>
          
          <p><span class="success-badge">✓ APPROVED</span></p>
          
          <p>Congratulations! Your personal loan application has been approved!</p>
          
          <div class="info-box">
            <h3>💰 Approved Loan Details:</h3>
            <p><strong>Loan Type:</strong> Personal Loan</p>
            <p><strong>Approved Amount:</strong> ${loanAmount}</p>
            <p><strong>Status:</strong> Approved - Pending Documentation</p>
          </div>
          
          <p><strong>Next Steps:</strong></p>
          <ul>
            <li>Our loan specialist will contact you within 24 hours</li>
            <li>You'll need to complete final documentation</li>
            <li>Loan disbursement process will be explained</li>
            <li>Terms and conditions will be provided</li>
          </ul>
          
          <p>We're thrilled to support your financial needs!</p>
          
          <p>If you have immediate questions, please contact our loan team at hello@bphgrowth.com</p>
          
          <p style="margin-top: 30px;">Congratulations and best wishes!<br><strong>The BPH Growth Loan Team</strong></p>
        </div>
        <div class="footer">
          <p><strong>BPH Growth</strong></p>
          <p>23 Durojaiye Street, Surulere, Lagos, Nigeria</p>
          <p>hello@bphgrowth.com</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Personal Loan Denial
export const personalLoanDenialTemplate = ({ fullName }) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 30px; text-align: center; }
        .content { padding: 40px 30px; }
        .info-box { background: #fff8f0; padding: 20px; border-left: 4px solid #f59e0b; margin: 20px 0; border-radius: 4px; }
        .cta-button { display: inline-block; background: #667eea; color: white !important; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 10px 5px; }
        .footer { background-color: #1a2332; color: #ffffff; text-align: center; padding: 30px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Loan Application Update</h1>
        </div>
        <div class="content">
          <p>Dear ${fullName},</p>
          
          <p>Thank you for applying for a personal loan with BPH Growth.</p>
          
          <div class="info-box">
            <p>After careful review of your application, we're unable to approve your loan request at this time. This decision is based on our current lending criteria and assessment.</p>
          </div>
          
          <p><strong>Alternative Options:</strong></p>
          <ul>
            <li><strong>Reapply Later</strong> - You can reapply after 6 months with updated information</li>
            <li><strong>Financial Consultation</strong> - Schedule a consultation to improve your financial profile</li>
            <li><strong>Financial Planning Resources</strong> - Access our free financial planning tools</li>
            <li><strong>Credit Building Tips</strong> - Learn how to strengthen your credit profile</li>
          </ul>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://bphgrowth.com/services" class="cta-button">Explore Services</a>
            <a href="https://bphgrowth.com/resource-center" class="cta-button">Free Resources</a>
          </div>
          
          <p>We appreciate your interest in BPH Growth and encourage you to stay connected with us.</p>
          
          <p>For questions, contact us at hello@bphgrowth.com</p>
          
          <p style="margin-top: 30px;">Best regards,<br><strong>The BPH Growth Loan Team</strong></p>
        </div>
        <div class="footer">
          <p><strong>BPH Growth</strong></p>
          <p>23 Durojaiye Street, Surulere, Lagos, Nigeria</p>
          <p>hello@bphgrowth.com</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// ==================== BUSINESS LOAN EMAIL TEMPLATES ====================

// Business Loan User Confirmation Email
export const businessLoanUserTemplate = ({ fullName, businessName, loanAmount }) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 30px; text-align: center; }
        .content { padding: 40px 30px; }
        .info-box { background: #f8f9fa; padding: 20px; border-left: 4px solid #667eea; margin: 20px 0; border-radius: 4px; }
        .footer { background-color: #1a2332; color: #ffffff; text-align: center; padding: 30px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✅ Loan Application Received!</h1>
        </div>
        <div class="content">
          <p>Dear ${fullName},</p>
          
          <p>Thank you for submitting your business loan application with BPH Growth. We've successfully received your request for <strong>${businessName}</strong>.</p>
          
          <div class="info-box">
            <h3>💰 Application Summary:</h3>
            <p><strong>Business:</strong> ${businessName}</p>
            <p><strong>Loan Type:</strong> Business Loan</p>
            <p><strong>Loan Amount:</strong> ${loanAmount}</p>
            <p><strong>Status:</strong> Under Review</p>
          </div>
          
          <p>Our loan specialists are reviewing your application and will get back to you within 3-5 business days.</p>
          
          <p><strong>Next Steps:</strong></p>
          <ul>
            <li>Our team will review your application and supporting documents</li>
            <li>We may contact you for additional information if needed</li>
            <li>You'll receive an email once a decision has been made</li>
          </ul>
          
          <p>If you have any questions in the meantime, please contact us at hello@bphgrowth.com</p>
          
          <p style="margin-top: 30px;">Best regards,<br><strong>The BPH Growth Loan Team</strong></p>
        </div>
        <div class="footer">
          <p><strong>BPH Growth</strong></p>
          <p>23 Durojaiye Street, Surulere, Lagos, Nigeria</p>
          <p>hello@bphgrowth.com</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Business Loan Admin Notification
export const businessLoanAdminTemplate = ({ fullName, businessEmail, businessName, loanAmount, businessPurpose }) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; }
        .content { padding: 30px; }
        .info-box { background: #f8f9fa; padding: 15px; margin: 15px 0; border-radius: 4px; }
        .info-box strong { color: #667eea; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🔔 New Business Loan Application</h1>
        </div>
        <div class="content">
          <h2>Business Loan Application Received</h2>
          
          <div class="info-box">
            <p><strong>Applicant:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${businessEmail}</p>
            <p><strong>Business:</strong> ${businessName}</p>
            <p><strong>Loan Amount:</strong> ${loanAmount}</p>
          </div>
          
          <div class="info-box">
            <p><strong>Business Purpose:</strong></p>
            <p>${businessPurpose}</p>
          </div>
          
          <p>Please log in to the admin dashboard to review this loan application.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Business Loan Approval
export const businessLoanApprovalTemplate = ({ fullName, businessName, loanAmount }) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
        .header { background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 40px 30px; text-align: center; }
        .content { padding: 40px 30px; }
        .info-box { background: linear-gradient(135deg, #10b98115 0%, #05966915 100%); padding: 20px; border-left: 4px solid #10b981; margin: 20px 0; border-radius: 4px; }
        .success-badge { display: inline-block; background: #10b981; color: white; padding: 8px 16px; border-radius: 20px; font-weight: 600; margin: 10px 0; }
        .footer { background-color: #1a2332; color: #ffffff; text-align: center; padding: 30px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎉 Loan Application Approved!</h1>
        </div>
        <div class="content">
          <p>Dear ${fullName},</p>
          
          <p><span class="success-badge">✓ APPROVED</span></p>
          
          <p>Congratulations! Your loan application for <strong>${businessName}</strong> has been approved!</p>
          
          <div class="info-box">
            <h3>💰 Approved Loan Details:</h3>
            <p><strong>Business Name:</strong> ${businessName}</p>
            <p><strong>Approved Amount:</strong> ${loanAmount}</p>
            <p><strong>Status:</strong> Approved - Pending Documentation</p>
          </div>
          
          <p><strong>Next Steps:</strong></p>
          <ul>
            <li>Our loan specialist will contact you within 24 hours</li>
            <li>You'll need to complete final documentation</li>
            <li>Loan disbursement process will be explained</li>
            <li>Terms and conditions will be provided</li>
          </ul>
          
          <p>This is an exciting step for <strong>${businessName}</strong>! We're thrilled to support your business growth.</p>
          
          <p>If you have immediate questions, please contact our loan team at hello@bphgrowth.com</p>
          
          <p style="margin-top: 30px;">Congratulations and best wishes!<br><strong>The BPH Growth Loan Team</strong></p>
        </div>
        <div class="footer">
          <p><strong>BPH Growth</strong></p>
          <p>23 Durojaiye Street, Surulere, Lagos, Nigeria</p>
          <p>hello@bphgrowth.com</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Business Loan Denial
export const businessLoanDenialTemplate = ({ fullName, businessName }) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 30px; text-align: center; }
        .content { padding: 40px 30px; }
        .info-box { background: #fff8f0; padding: 20px; border-left: 4px solid #f59e0b; margin: 20px 0; border-radius: 4px; }
        .cta-button { display: inline-block; background: #667eea; color: white !important; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 10px 5px; }
        .footer { background-color: #1a2332; color: #ffffff; text-align: center; padding: 30px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Loan Application Update</h1>
        </div>
        <div class="content">
          <p>Dear ${fullName},</p>
          
          <p>Thank you for applying for business financing with BPH Growth for <strong>${businessName}</strong>.</p>
          
          <div class="info-box">
            <p>After careful review of your application, we're unable to approve your loan request at this time. This decision is based on our current lending criteria and business assessment.</p>
          </div>
          
          <p><strong>Alternative Options:</strong></p>
          <ul>
            <li><strong>Reapply Later</strong> - You can reapply after 6 months with updated financials</li>
            <li><strong>Business Consultation</strong> - Schedule a free consultation to improve your business profile</li>
            <li><strong>Financial Planning</strong> - Access our resources to strengthen your financial position</li>
            <li><strong>Alternative Funding</strong> - Explore other financing options we can recommend</li>
          </ul>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://bphgrowth.com/services" class="cta-button">Explore Services</a>
            <a href="https://bphgrowth.com/resource-center" class="cta-button">Free Resources</a>
          </div>
          
          <p>We appreciate your interest in BPH Growth and encourage you to stay connected with us. Our team is here to support your business growth in other ways.</p>
          
          <p>For questions or to discuss alternative options, contact us at hello@bphgrowth.com</p>
          
          <p style="margin-top: 30px;">Best regards,<br><strong>The BPH Growth Loan Team</strong></p>
        </div>
        <div class="footer">
          <p><strong>BPH Growth</strong></p>
          <p>23 Durojaiye Street, Surulere, Lagos, Nigeria</p>
          <p>hello@bphgrowth.com</p>
        </div>
      </div>
    </body>
    </html>
  `
}


// ==================== RESOURCE DOWNLOAD EMAIL TEMPLATE ====================

export const resourceDownloadTemplate = ({ email, resourceTitle, downloadUrl }) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 28px; font-weight: 600; }
        .header p { margin: 10px 0 0 0; font-size: 16px; opacity: 0.9; }
        .content { padding: 40px 30px; background-color: #ffffff; }
        .content p { margin: 0 0 15px 0; font-size: 16px; line-height: 1.6; }
        .resource-box { background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%); border-left: 4px solid #667eea; padding: 20px; margin: 25px 0; border-radius: 8px; }
        .resource-box h3 { margin: 0 0 10px 0; color: #667eea; font-size: 18px; }
        .resource-box p { margin: 5px 0; color: #555; font-size: 14px; }
        .download-button { display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white !important; padding: 16px 40px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; margin: 20px 0; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3); }
        .button-container { text-align: center; margin: 30px 0; }
        .features { background-color: #f9f9f9; padding: 25px; margin: 25px 0; border-radius: 8px; }
        .features h3 { margin: 0 0 15px 0; color: #333; font-size: 18px; }
        .features ul { margin: 0; padding-left: 20px; }
        .features li { margin: 10px 0; color: #555; font-size: 15px; }
        .cta-section { background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 30px; margin: 30px 0; border-radius: 8px; text-align: center; }
        .cta-section h3 { margin: 0 0 10px 0; color: #333; font-size: 20px; }
        .cta-section p { margin: 0 0 20px 0; color: #666; }
        .cta-links { display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; }
        .cta-link { display: inline-block; color: #667eea !important; text-decoration: none; font-weight: 600; padding: 10px 20px; border: 2px solid #667eea; border-radius: 6px; }
        .footer { background-color: #1a2332; color: #ffffff; text-align: center; padding: 30px; }
        .footer p { margin: 5px 0; font-size: 14px; opacity: 0.8; }
        .footer a { color: #667eea; text-decoration: none; }
        .divider { height: 1px; background: linear-gradient(to right, transparent, #ddd, transparent); margin: 30px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📥 Your Resource is Ready!</h1>
          <p>Thank you for choosing BPH Growth</p>
        </div>
        <div class="content">
          <p>Hello!</p>
          
          <p>Thank you for downloading from BPH Growth. We're excited to share this valuable resource with you!</p>
          <div class="resource-box">
            <h3>📄 ${resourceTitle}</h3>
            <p>This resource is now available for download. Click the button below to access your file.</p>
          </div>
          <div class="button-container">
            <a href="${downloadUrl}" class="download-button">⬇️ Download Now</a>
          </div>
          <p style="text-align: center; color: #888; font-size: 14px;">
            The download link will open in your browser and the file will download automatically.
          </p>
          <div class="divider"></div>
          <div class="features">
            <h3>🚀 Get More from BPH Growth</h3>
            <ul>
              <li><strong>Free Business Templates</strong> - Access more resources in our Resource Center</li>
              <li><strong>Expert Insights</strong> - Read our latest business growth strategies</li>
              <li><strong>Free Consultation</strong> - Schedule a call with our business experts</li>
              <li><strong>Loan Assistance</strong> - Get help securing funding for your business</li>
            </ul>
          </div>
          <div class="cta-section">
            <h3>Ready to Grow Your Business?</h3>
            <p>Explore our services and discover how we can help you succeed</p>
            <div class="cta-links">
              <a href="https://bphgrowth.com/resource-center" class="cta-link">Browse Resources</a>
              <a href="https://bphgrowth.com/blogs" class="cta-link">Read Insights</a>
              <a href="https://bphgrowth.com/services" class="cta-link">Our Services</a>
            </div>
          </div>
          <div class="divider"></div>
          <p>If you have any questions or need assistance, feel free to reach out to us at <a href="mailto:hello@bphgrowth.com" style="color: #667eea; text-decoration: none;">hello@bphgrowth.com</a></p>
          <p style="margin-top: 30px;">Best regards,<br><strong>The BPH Growth Team</strong></p>
        </div>
        <div class="footer">
          <p><strong>BPH Growth</strong></p>
          <p>23 Durojaiye Street, Surulere, Lagos, Nigeria</p>
          <p><a href="mailto:hello@bphgrowth.com">hello@bphgrowth.com</a></p>
          <p style="margin-top: 15px; font-size: 12px;">
            You received this email because you downloaded a resource from BPH Growth.
          </p>
        </div>
      </div>
    </body>
    </html>
  `
}