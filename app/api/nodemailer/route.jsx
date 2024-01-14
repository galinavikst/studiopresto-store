import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { client, order } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465, // or 587 for STARTTLS
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: client.email,
      subject: "Order details",
      html: `<div> 
       <h3>Client:</h3>
       <p>
         Name: ${client.name}<br/>
         Email: ${client.email}<br/>
         Phone: ${client.tel} 
       </p>
       <h3>Order:</h3>
       ${order
         .map(
           (item) => `
       <p>
         Id: ${item.id}<br/>
         Quantity: ${item.count || 1}
       </p>`
         )
         .join("")}
      </div>`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      message: "Email sent successfully",
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to send email", status: 500 });
  }
}
