import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Resend } from "resend";
import { CONTACT_DEV_MODE_MESSAGE } from "@/lib/contact-dev";

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function sendViaResend(name: string, email: string, message: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    throw new Error("RESEND_API_KEY and CONTACT_TO_EMAIL must be set");
  }
  const from =
    process.env.CONTACT_FROM_EMAIL?.trim() ||
    "Portfolio <onboarding@resend.dev>";

  const resend = new Resend(apiKey);
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `Portfolio inquiry from ${name}`,
    html: `
      <div style="font-family: system-ui, sans-serif; max-width: 560px; line-height: 1.5;">
        <h2 style="margin: 0 0 16px;">New message from your portfolio</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; background: #f4f4f5; padding: 16px; border-radius: 8px;">${safeMessage}</p>
      </div>
    `,
  });

  if (error) {
    const msg = "message" in error && typeof error.message === "string" ? error.message : "Resend error";
    throw new Error(msg);
  }
}

async function sendViaSmtp(name: string, email: string, message: string) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT || "587");
  const to = process.env.CONTACT_TO_EMAIL?.trim() || user;

  if (!host || !user || !pass || !to) {
    throw new Error("SMTP_HOST, SMTP_USER, SMTP_PASS, and CONTACT_TO_EMAIL (or SMTP_USER as inbox) must be set");
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const safeName = escapeHtml(name);
  const safeMessage = escapeHtml(message);

  await transporter.sendMail({
    from: user,
    to,
    replyTo: email,
    subject: `Portfolio inquiry from ${name}`,
    html: `
      <div style="font-family: system-ui, sans-serif; max-width: 560px;">
        <h2>New message</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${safeMessage}</p>
      </div>
    `,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 });
    }

    const useResend = Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL);
    const useSmtp = Boolean(
      process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS
    );

    if (useResend) {
      await sendViaResend(name, email, message);
    } else if (useSmtp) {
      await sendViaSmtp(name, email, message);
    } else if (process.env.NODE_ENV === "development") {
      // Local dev: no secrets required — log only (never in production)
      console.log("[contact] dev — email not configured, message not sent:", {
        name,
        email,
        messagePreview: message.slice(0, 400),
      });
      return NextResponse.json({ message: CONTACT_DEV_MODE_MESSAGE, dev: true }, { status: 200 });
    } else {
      return NextResponse.json(
        {
          error:
            "Contact form is not configured. In Vercel Project Settings, add RESEND_API_KEY and CONTACT_TO_EMAIL (or SMTP_*). See .env.example.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json({ message: "Sent successfully" }, { status: 200 });
  } catch (err) {
    console.error("send-email:", err);
    return NextResponse.json(
      { error: "Could not send message. Please try again or email directly." },
      { status: 500 }
    );
  }
}
