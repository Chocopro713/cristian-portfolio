import { Resend } from 'resend';

let resend: Resend | null = null;

function getResendClient(): Resend {
  if (!resend) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY no está configurado en las variables de entorno');
    }
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
}

export interface ContactEmailData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(data: ContactEmailData) {
  const { name, email, message } = data;

  const { data: result, error } = await getResendClient().emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: process.env.CONTACT_EMAIL || 'Cristianbr7@live.com',
    replyTo: email,
    subject: `New Contact from Portfolio: ${name}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Message</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0f172a;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0f172a; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); border-radius: 16px; border: 1px solid #334155; overflow: hidden;">
                  <!-- Header -->
                  <tr>
                    <td style="padding: 40px 40px 20px; text-align: center;">
                      <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #3b82f6, #8b5cf6); border-radius: 12px; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
                        <span style="font-size: 28px;">✉️</span>
                      </div>
                      <h1 style="margin: 0; color: #f8fafc; font-size: 24px; font-weight: 700;">
                        New Contact Message
                      </h1>
                      <p style="margin: 10px 0 0; color: #94a3b8; font-size: 14px;">
                        Someone reached out through your portfolio
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 20px 40px;">
                      <!-- Name -->
                      <div style="background-color: #1e293b; border-radius: 12px; padding: 16px; margin-bottom: 16px; border: 1px solid #334155;">
                        <p style="margin: 0 0 4px; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">
                          Name
                        </p>
                        <p style="margin: 0; color: #f8fafc; font-size: 16px; font-weight: 500;">
                          ${name}
                        </p>
                      </div>
                      
                      <!-- Email -->
                      <div style="background-color: #1e293b; border-radius: 12px; padding: 16px; margin-bottom: 16px; border: 1px solid #334155;">
                        <p style="margin: 0 0 4px; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">
                          Email
                        </p>
                        <a href="mailto:${email}" style="color: #3b82f6; font-size: 16px; font-weight: 500; text-decoration: none;">
                          ${email}
                        </a>
                      </div>
                      
                      <!-- Message -->
                      <div style="background-color: #1e293b; border-radius: 12px; padding: 16px; border: 1px solid #334155;">
                        <p style="margin: 0 0 8px; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">
                          Message
                        </p>
                        <p style="margin: 0; color: #e2e8f0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">
                          ${message}
                        </p>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Action Button -->
                  <tr>
                    <td style="padding: 20px 40px 40px; text-align: center;">
                      <a href="mailto:${email}" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: #ffffff; text-decoration: none; font-weight: 600; border-radius: 10px; font-size: 14px;">
                        Reply to ${name}
                      </a>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="padding: 20px 40px; border-top: 1px solid #334155; text-align: center;">
                      <p style="margin: 0; color: #64748b; font-size: 12px;">
                        This message was sent from your portfolio contact form
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `,
  });

  if (error) {
    console.error('Resend error:', error);
    throw new Error(error.message);
  }

  console.log('Email sent successfully:', result);
  return { success: true };
}
