    // /src/app/api/send-order/route.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, cart } = body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const cartItemsHtml = cart?.map((item: any) =>
      `<li><strong>${item.name}</strong> - ₹${item.price}</li>`).join('');

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: '🛍️ New Ganpati Cart Order - BappaInUSA',
      html: `
        <h2>New Order Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Items Ordered:</h3>
        <ul>${cartItemsHtml}</ul>
      `,
      attachments: [
        {
          filename: 'order.json',
          content: JSON.stringify(body, null, 2),
          contentType: 'application/json',
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' });

  } catch (err: any) {
    return NextResponse.json(
      { error: 'Failed to send email: ' + err.message },
      { status: 500 }
    );
  }
}
