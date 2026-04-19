import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "KDSL Contact Form <no-reply@kdramasl.site>",
      to: ["contact@kdramasl.site"],
      replyTo: email,
      subject: subject ? `${subject} — from ${name}` : `New message from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: #e5e5e5; border-radius: 16px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08);">
          <div style="background: linear-gradient(135deg, #00d9ff22 0%, #6c5ce744 100%); padding: 32px 40px 20px; border-bottom: 1px solid rgba(255,255,255,0.08);">
            <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: #fff; letter-spacing: -0.02em;">
              📬 New Contact Message
            </h1>
            <p style="margin: 6px 0 0; font-size: 14px; color: #aaa;">Received via kdramasl.site contact form</p>
          </div>
          <div style="padding: 32px 40px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; font-size: 13px; color: #888; width: 120px; vertical-align: top;">Name</td>
                <td style="padding: 10px 0; font-size: 14px; color: #fff; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-size: 13px; color: #888; vertical-align: top;">Email</td>
                <td style="padding: 10px 0; font-size: 14px; color: #00d9ff;">
                  <a href="mailto:${email}" style="color: #00d9ff; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-size: 13px; color: #888; vertical-align: top;">Subject</td>
                <td style="padding: 10px 0; font-size: 14px; color: #fff;">${subject || "—"}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding: 20px; background: rgba(255,255,255,0.04); border-radius: 10px; border: 1px solid rgba(255,255,255,0.07);">
              <p style="margin: 0 0 10px; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.08em;">Message</p>
              <p style="margin: 0; font-size: 15px; color: #ddd; line-height: 1.7; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="padding: 16px 40px 24px; border-top: 1px solid rgba(255,255,255,0.06);">
            <p style="margin: 0; font-size: 12px; color: #555;">Reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
  }
}
