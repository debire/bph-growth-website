import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async ({ to, subject, html }) => {
  try {
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'BPH Growth <noreply@yourdomain.com>',
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
    })

    if (error) {
      console.error('❌ Email send error:', error)
      throw new Error(error.message)
    }

    console.log('✅ Email sent successfully:', data)
    return data
  } catch (error) {
    console.error('❌ Failed to send email:', error)
    throw error
  }
}

export default resend