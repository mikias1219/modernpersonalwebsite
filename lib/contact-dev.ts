/**
 * Dev-only contact response when Resend/SMTP is not configured (NODE_ENV=development).
 * Keep in sync with app/api/send-email/route.ts.
 */
export const CONTACT_DEV_MODE_MESSAGE =
  "Dev mode: logged to terminal. Add RESEND_API_KEY + CONTACT_TO_EMAIL in .env.local to send real email.";
