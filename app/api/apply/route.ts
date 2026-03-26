import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    const fullName = formData.get("fullName") as string
    const email = formData.get("email") as string
    const jobTitle = formData.get("jobTitle") as string
    const resume = formData.get("resume") as File | null

    if (!fullName || !email || !jobTitle) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Log application details (for development)
    console.log("New Job Application Received:")
    console.log("----------------------------")
    console.log(`Position: ${jobTitle}`)
    console.log(`Full Name: ${fullName}`)
    console.log(`Email: ${email}`)
    if (resume) {
      console.log(`Resume: ${resume.name} (${resume.size} bytes)`)
    }
    console.log("----------------------------")
    console.log("This application should be sent to: info@worldgame2010.com")

    // In production, integrate with an email service like Resend or SendGrid
    // to send the application to info@worldgame2010.com
    // 
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'careers@worldgame2010.com',
    //   to: 'info@worldgame2010.com',
    //   subject: `New Application: ${jobTitle} - ${fullName}`,
    //   html: `
    //     <h2>New Job Application</h2>
    //     <p><strong>Position:</strong> ${jobTitle}</p>
    //     <p><strong>Name:</strong> ${fullName}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //   `,
    //   attachments: resume ? [{
    //     filename: resume.name,
    //     content: Buffer.from(await resume.arrayBuffer()),
    //   }] : [],
    // })

    return NextResponse.json({ 
      success: true,
      message: "Application submitted successfully" 
    })
  } catch (error) {
    console.error("Error processing application:", error)
    return NextResponse.json(
      { error: "Failed to process application" },
      { status: 500 }
    )
  }
}
