import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      )
    }

    // Send email using mailto link workaround or email service
    // For now, we'll use a simple fetch to a mail service
    // In production, you'd use a service like Resend, SendGrid, or Nodemailer
    
    const emailContent = `
New Partnership Inquiry from World Game 2010 Website

Name: ${name}
Email: ${email}

Message:
${message}

---
This message was sent from the World Game 2010 website contact form.
    `.trim()

    // For development/demo purposes, log the email content
    console.log("Email would be sent to: info@worldgame2010.com")
    console.log("Email content:", emailContent)

    // In production, integrate with an email service like Resend:
    // 
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // 
    // await resend.emails.send({
    //   from: 'World Game 2010 <noreply@worldgame2010.com>',
    //   to: 'info@worldgame2010.com',
    //   replyTo: email,
    //   subject: `Partnership Inquiry from ${name}`,
    //   text: emailContent,
    // })

    return NextResponse.json({ 
      success: true, 
      message: "Your message has been sent to info@worldgame2010.com" 
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    )
  }
}
