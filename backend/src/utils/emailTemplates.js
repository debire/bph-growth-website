// User confirmation email for consultation
export const consultationUserTemplate = (data) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1a2332; color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
    .appointment-box { background: #d1fae5; border: 2px solid #10b981; padding: 20px; margin: 20px 0; border-radius: 10px; text-align: center; }
    .date-time { font-size: 24px; font-weight: bold; color: #1a2332; margin: 10px 0; }
    .info-section { background: white; padding: 15px; border-radius: 8px; margin: 15px 0; }
    .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>✅ Consultation Scheduled!</h1>
    </div>
    <div class="content">
      <p>Dear ${data.fullName},</p>
      
      <p>Thank you for scheduling a consultation with BPH Growth. We have received your request and confirmed your appointment.</p>

      <div class="appointment-box">
        <p style="margin: 0; font-size: 18px; color: #059669;">📅 Your Scheduled Consultation</p>
        <div class="date-time">
          ${new Date(data.scheduledDate).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
        <div class="date-time">
          ${data.scheduledTime}
        </div>
      </div>
      
      <div class="info-section">
        <p><strong>Your Submission Details:</strong></p>
        <ul style="list-style: none; padding-left: 0;">
          <li><strong>Company:</strong> ${data.companyName}</li>
          <li><strong>Industry:</strong> ${data.industrySector}</li>
          <li><strong>Business Stage:</strong> ${data.currentBusinessStage}</li>
          <li><strong>Service Interest:</strong> ${data.primaryServiceInterest}</li>
        </ul>
      </div>

      <div class="info-section">
        <p><strong>What to expect during your consultation:</strong></p>
        <ul>
          <li>A 15-minute consultation with our business consultant</li>
          <li>Discussion about your business goals and challenges</li>
          <li>Initial recommendations for your growth strategy</li>
          <li>Information about our services and how we can help</li>
        </ul>
      </div>

      <div class="info-section">
        <p><strong>Before the consultation:</strong></p>
        <ul>
          <li>Review the business summary you submitted</li>
          <li>Prepare any specific questions you'd like to ask</li>
          <li>Have your calendar ready to discuss next steps</li>
        </ul>
      </div>

      <p style="background: #fef3c7; padding: 15px; border-left: 4px solid #f59e0b; border-radius: 5px; margin: 20px 0;">
        <strong>📞 Important:</strong> Our consultation specialist will contact you at the scheduled time. Please ensure you're available and in a quiet location for the call.
      </p>

      <p>We look forward to speaking with you and helping your business grow!</p>
      
      <p>Best regards,<br>
      <strong>The BPH Growth Team</strong></p>
    </div>
    <div class="footer">
      <p>BPH Growth | Empowering African Businesses</p>
      <p>If you have any questions or need to reschedule, reply to this email or contact us at ${process.env.BUSINESS_EMAIL}</p>
    </div>
  </div>
</body>
</html>
`

// Admin notification email for consultation
export const consultationAdminTemplate = (data) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1a2332; color: white; padding: 20px; border-radius: 10px 10px 0 0; }
    .content { background: white; padding: 30px; border: 1px solid #e5e7eb; border-radius: 0 0 10px 10px; }
    .info-row { display: flex; padding: 10px 0; border-bottom: 1px solid #f3f4f6; }
    .label { font-weight: bold; width: 200px; color: #4b5563; }
    .value { flex: 1; color: #1f2937; }
    .summary { background: #f9fafb; padding: 15px; border-radius: 5px; margin-top: 20px; }
    .schedule-box { background: #d1fae5; border-left: 4px solid #10b981; padding: 20px; margin: 20px 0; border-radius: 5px; }
    .urgent { background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 5px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>🔔 New Consultation Application</h2>
      <p style="margin: 5px 0 0 0; font-size: 14px;">Application ID: ${data.id || 'Pending'}</p>
    </div>
    <div class="content">
      <p><strong>A new consultation request has been submitted and scheduled.</strong></p>

      <div class="schedule-box">
        <p style="margin: 0; font-size: 16px; font-weight: bold; color: #065f46;">📅 Scheduled Consultation</p>
        <p style="font-size: 20px; font-weight: bold; margin: 10px 0; color: #1a2332;">
          ${new Date(data.scheduledDate).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
        <p style="font-size: 20px; font-weight: bold; margin: 10px 0; color: #1a2332;">
          ${data.scheduledTime}
        </p>
      </div>

      <div class="urgent">
        <p style="margin: 0;"><strong>⏰ Reminder:</strong> Make sure to prepare for this consultation and be available at the scheduled time.</p>
      </div>
      
      <h3 style="margin-top: 20px; color: #1a2332;">Applicant Information</h3>
      
      <div class="info-row">
        <div class="label">Full Name:</div>
        <div class="value">${data.fullName}</div>
      </div>
      <div class="info-row">
        <div class="label">Email:</div>
        <div class="value">${data.businessEmail}</div>
      </div>
      <div class="info-row">
        <div class="label">Company:</div>
        <div class="value">${data.companyName}</div>
      </div>
      <div class="info-row">
        <div class="label">Industry:</div>
        <div class="value">${data.industrySector}</div>
      </div>
      <div class="info-row">
        <div class="label">Business Stage:</div>
        <div class="value">${data.currentBusinessStage}</div>
      </div>
      <div class="info-row">
        <div class="label">Service Interest:</div>
        <div class="value">${data.primaryServiceInterest}</div>
      </div>
      <div class="info-row">
        <div class="label">Target Funding:</div>
        <div class="value">${data.targetFundingAmount || 'Not specified'}</div>
      </div>
      
      <div class="summary">
        <strong>Business Summary:</strong>
        <p style="margin: 10px 0 0 0;">${data.businessSummary}</p>
      </div>
      
      <div style="background: #e0f2fe; padding: 15px; border-radius: 5px; margin-top: 20px;">
        <p style="margin: 0;"><strong>📊 Submitted:</strong> ${new Date().toLocaleString()}</p>
        <p style="margin: 10px 0 0 0;"><strong>🔑 Application ID:</strong> ${data.id || 'Pending'}</p>
      </div>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb;">
        <p style="margin: 0;">
          <a href="${process.env.FRONTEND_URL || 'http://localhost:5173'}/admin/consultations" 
             style="display: inline-block; background: #1a2332; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">
            View in Admin Dashboard
          </a>
        </p>
        <p style="margin: 15px 0 0 0; font-size: 14px; color: #666;">
          Log in to the admin dashboard to review and manage this consultation appointment.
        </p>
      </div>
    </div>
  </div>
</body>
</html>
`

// User confirmation email for loan application
export const loanUserTemplate = (data) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1a2332; color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
    .info-box { background: white; padding: 15px; border-radius: 8px; margin: 15px 0; }
    .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>✅ Loan Application Received!</h1>
    </div>
    <div class="content">
      <p>Dear ${data.fullName},</p>
      
      <p>Thank you for submitting your loan application to BPH Growth. We have received your request and our team is currently reviewing it.</p>
      
      <div class="info-box">
        <p><strong>Your Application Details:</strong></p>
        <ul style="list-style: none; padding-left: 0;">
          <li><strong>Loan Type:</strong> ${data.loanType}</li>
          <li><strong>Loan Amount:</strong> ${data.loanAmount}</li>
          <li><strong>Repayment Period:</strong> ${data.repaymentPeriod}</li>
        </ul>
      </div>

      <div class="info-box">
        <p><strong>What happens next:</strong></p>
        <ul>
          <li>Our loan specialists will review your application within 3-5 business days</li>
          <li>We may contact you for additional documentation or clarification</li>
          <li>You'll receive an email with our decision and next steps</li>
          <li>If approved, we'll discuss terms and disbursement timeline</li>
        </ul>
      </div>

      <p style="background: #e0f2fe; padding: 15px; border-left: 4px solid #60a5fa; border-radius: 5px; margin: 20px 0;">
        <strong>📧 Keep an eye on your email:</strong> We'll send updates about your application status. Make sure to check your spam folder as well.
      </p>

      <p>If you have any questions about your application, feel free to reply to this email.</p>
      
      <p>Best regards,<br>
      <strong>The BPH Growth Team</strong></p>
    </div>
    <div class="footer">
      <p>BPH Growth | Empowering African Businesses</p>
      <p>Contact us: ${process.env.BUSINESS_EMAIL}</p>
    </div>
  </div>
</body>
</html>
`

// Admin notification email for loan application
export const loanAdminTemplate = (data) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1a2332; color: white; padding: 20px; border-radius: 10px 10px 0 0; }
    .content { background: white; padding: 30px; border: 1px solid #e5e7eb; border-radius: 0 0 10px 10px; }
    .info-row { display: flex; padding: 10px 0; border-bottom: 1px solid #f3f4f6; }
    .label { font-weight: bold; width: 200px; color: #4b5563; }
    .value { flex: 1; color: #1f2937; }
    .section { background: #f9fafb; padding: 15px; border-radius: 5px; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>🔔 New Loan Application</h2>
      <p style="margin: 5px 0 0 0; font-size: 14px;">Application ID: ${data.id || 'Pending'}</p>
    </div>
    <div class="content">
      <p><strong>A new ${data.loanType} application has been submitted.</strong></p>
      
      <h3 style="margin-top: 20px; color: #1a2332;">Applicant Information</h3>
      
      <div class="info-row">
        <div class="label">Full Name:</div>
        <div class="value">${data.fullName}</div>
      </div>
      <div class="info-row">
        <div class="label">Email:</div>
        <div class="value">${data.email}</div>
      </div>
      <div class="info-row">
        <div class="label">Phone:</div>
        <div class="value">${data.phoneNumber}</div>
      </div>
      <div class="info-row">
        <div class="label">Loan Type:</div>
        <div class="value">${data.loanType}</div>
      </div>
      <div class="info-row">
        <div class="label">Loan Amount:</div>
        <div class="value">${data.loanAmount}</div>
      </div>
      <div class="info-row">
        <div class="label">Repayment Period:</div>
        <div class="value">${data.repaymentPeriod}</div>
      </div>
      
      ${data.loanPurpose ? `
        <div class="section">
          <strong>Loan Purpose:</strong>
          <p style="margin: 10px 0 0 0;">${data.loanPurpose}</p>
        </div>
      ` : ''}
      
      ${data.businessPurpose ? `
        <div class="section">
          <strong>Business Purpose:</strong>
          <p style="margin: 10px 0 0 0;">${data.businessPurpose}</p>
        </div>
      ` : ''}
      
      <div style="background: #e0f2fe; padding: 15px; border-radius: 5px; margin-top: 20px;">
        <p style="margin: 0;"><strong>📊 Submitted:</strong> ${new Date().toLocaleString()}</p>
        <p style="margin: 10px 0 0 0;"><strong>🔑 Application ID:</strong> ${data.id || 'Pending'}</p>
      </div>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb;">
        <p style="margin: 0;">
          <a href="${process.env.FRONTEND_URL || 'http://localhost:5173'}/admin/loans" 
             style="display: inline-block; background: #1a2332; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">
            View in Admin Dashboard
          </a>
        </p>
        <p style="margin: 15px 0 0 0; font-size: 14px; color: #666;">
          Log in to the admin dashboard to review and manage this loan application.
        </p>
      </div>
    </div>
  </div>
</body>
</html>
`

export const approvalTemplate = (data, type) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #10b981; color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
    .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>✅ ${type === 'consultation' ? 'Consultation Approved' : 'Loan Application Approved'}</h1>
    </div>
    <div class="content">
      <p>Dear ${data.fullName},</p>
      
      <p><strong>Congratulations!</strong> Your ${type === 'consultation' ? 'consultation request' : 'loan application'} has been approved.</p>
      
      ${type === 'consultation' ? `
        <p>Our team will contact you shortly to schedule your consultation session. Please keep an eye on your email and phone for our call.</p>
      ` : `
        <p>Your loan of <strong>${data.loanAmount}</strong> has been approved. Our team will contact you within the next 24 hours to discuss the next steps for loan disbursement.</p>
        
        <p><strong>What's Next?</strong></p>
        <ol>
          <li>Complete any additional documentation required</li>
          <li>Review and sign the loan agreement</li>
          <li>Set up your disbursement account</li>
          <li>Receive your funds</li>
        </ol>
      `}
      
      <p>If you have any questions, please don't hesitate to contact us.</p>
      
      <p>Best regards,<br>
      <strong>The BPH Growth Team</strong></p>
    </div>
    <div class="footer">
      <p>BPH Growth | ${process.env.BUSINESS_EMAIL}</p>
    </div>
  </div>
</body>
</html>
`

export const denialTemplate = (data, type) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #ef4444; color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
    .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>${type === 'consultation' ? 'Consultation Update' : 'Loan Application Update'}</h1>
    </div>
    <div class="content">
      <p>Dear ${data.fullName},</p>
      
      <p>Thank you for your interest in BPH Growth. After careful review of your ${type === 'consultation' ? 'consultation request' : 'loan application'}, we regret to inform you that we are unable to proceed at this time.</p>
      
      ${type === 'loan' ? `
        <p>This decision may be based on various factors including current lending criteria, documentation, or business requirements.</p>
      ` : ''}
      
      <p>We encourage you to:</p>
      <ul>
        <li>Review our resources and insights to strengthen your ${type === 'consultation' ? 'business foundation' : 'financial profile'}</li>
        <li>Consider reapplying in the future when circumstances change</li>
        <li>Contact us if you have questions about this decision</li>
      </ul>
      
      <p>We appreciate your interest in BPH Growth and wish you the best in your business endeavors.</p>
      
      <p>Best regards,<br>
      <strong>The BPH Growth Team</strong></p>
    </div>
    <div class="footer">
      <p>BPH Growth | ${process.env.BUSINESS_EMAIL}</p>
    </div>
  </div>
</body>
</html>
`

export const resourceDownloadTemplate = (email, resourceTitle) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1a2332; color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
    .button { display: inline-block; background: #60a5fa; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
    .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Your Resource is Ready!</h1>
    </div>
    <div class="content">
      <p>Thank you for downloading <strong>${resourceTitle}</strong> from BPH Growth.</p>
      
      <p>Your resource is attached to this email. We hope you find it valuable for your business growth journey.</p>
      
      <p><strong>More Resources Available:</strong></p>
      <p>Visit our Resource Center to access more free templates, guides, and tools to help grow your business.</p>
      
      <a href="${process.env.FRONTEND_URL}/resource-center" class="button">Browse More Resources</a>
      
      <p>Stay connected with BPH Growth for more insights, funding opportunities, and business support.</p>
      
      <p>Best regards,<br>
      <strong>The BPH Growth Team</strong></p>
    </div>
    <div class="footer">
      <p>BPH Growth | Empowering African Businesses</p>
      <p>${process.env.BUSINESS_EMAIL}</p>
    </div>
  </div>
</body>
</html>
`