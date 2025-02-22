import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { to, subject, text } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    });

    return Response.json({ success: "Email sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
