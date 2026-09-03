import { Resend } from 'resend';

import { env } from '@/lib/env';
import { logStructured } from '@/lib/log';

const DEFAULT_SENDER =
  env.EMAIL_FROM ?? 'Society of Renewal <waitlist@societyofrenewal.org>';

const resendClient = env.EMAIL_PROVIDER_API_KEY
  ? new Resend(env.EMAIL_PROVIDER_API_KEY)
  : null;

export interface WaitlistConfirmationPayload {
  email: string;
  token: string;
}

export async function sendWaitlistConfirmationEmail({
  email,
  token,
}: WaitlistConfirmationPayload) {
  const confirmationUrl = new URL('/waitlist/confirm', env.APP_URL);
  confirmationUrl.searchParams.set('token', token);

  const subject = 'Confirm your Society of Renewal email';
  const html = `
    <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;background-color:#030711;padding:32px 0;color:#f8fafc;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
      <tr>
        <td align="center" style="padding:0 24px;">
          <table role="presentation" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background-color:#0f172a;border-radius:16px;padding:32px;border:1px solid rgba(255,255,255,0.08);">
            <tr>
              <td>
                <h1 style="margin:0;font-size:24px;font-weight:600;color:#f8fafc;">Confirm your email</h1>
                <p style="margin:16px 0 24px;color:#cbd5f5;font-size:16px;line-height:1.6;">
                  Thank you for following the Society of Renewal. Confirm your email to receive project updates, public drafts, and future opportunities to participate.
                </p>
                <p style="margin:0;">
                  <a href="${confirmationUrl.toString()}" style="display:inline-block;padding:14px 24px;border-radius:999px;background:linear-gradient(135deg,#64748b,#d8dee9);color:#030711;text-decoration:none;font-weight:600;">
                    Confirm email
                  </a>
                </p>
                <p style="margin:24px 0 0;color:#94a3b8;font-size:13px;line-height:1.6;">
                  If you did not request this, you can safely ignore this email.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;

  if (!resendClient) {
    logStructured({
      level: 'warn',
      event: 'waitlist.email.skipped',
      message: 'Resend API key not configured; email logged to console.',
      data: {
        email,
        confirmationUrl: confirmationUrl.toString(),
      },
    });
    return;
  }

  try {
    const response = await resendClient.emails.send({
      from: DEFAULT_SENDER,
      to: email,
      subject,
      html,
    });

    logStructured({
      level: 'info',
      event: 'waitlist.email.sent',
      data: {
        email,
        messageId: response?.data?.id ?? null,
        error: response?.error ?? null,
      },
    });
  } catch (error) {
    logStructured({
      level: 'error',
      event: 'waitlist.email.error',
      message:
        error instanceof Error ? error.message : 'Unknown error sending email',
      data: {
        email,
      },
    });
    throw error;
  }
}
