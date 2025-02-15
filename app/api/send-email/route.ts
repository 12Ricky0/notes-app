import nodemailer from "nodemailer";

// function sendMail(email: string) {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     host: "smtp.gmail.com",
//     auth: {
//       user: process.env.EMAIL,
//       pass: process.env.MAIL_PASSWORD,
//     },
//     secure: true,
//     port: 587,
//   });
//   (async () => {
//     await transporter.sendMail({
//       from: "", // your email
//       to: email, // the email address you want to send an email to
//       subject: "", // The title or subject of the email
//       html: "", // I like sending my email as html, you can send \
//       // emails as html or as plain text
//     });

//     console.log("Email sent");
//   })();
// }

export async function POST(request: Request) {
  try {
    const { to, subject, text } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail", // Change this based on your email provider
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
