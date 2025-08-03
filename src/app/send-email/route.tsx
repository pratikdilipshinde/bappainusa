// /src/app/api/send-order/route.ts

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity?: number;
}

interface OrderRequestBody {
  name: string;
  email: string;
  phone: string;
  cart: CartItem[];
}

export async function POST(req: NextRequest) {
  try {
    const body: OrderRequestBody = await req.json();
    const { name, email, phone, cart } = body;

    if (!name || !email || !phone || !cart || cart.length === 0) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const cartItemsHtml = cart
      .map(item =>
        `<li><strong>${item.name}</strong> - ₹${item.price} (${item.quantity || 1})</li>`
      )
      .join('');

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
  } catch (err) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    return NextResponse.json(
      { error: 'Failed to send email: ' + error.message },
      { status: 500 }
    );
  }
}
