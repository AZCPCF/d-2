/**
 * Environment variables used across the application.
 * 
 * These variables are loaded from Next.js public runtime config (process.env).
 * Make sure to define them in your `.env` or environment settings.
 */

export const apiUrlPrimary: string | undefined = process.env.NEXT_PUBLIC_API_URL;
export const apiUrlSecondary: string | undefined = process.env.NEXT_PUBLIC_API_URL_SECONDARY;
export const tokenKey: string | undefined = process.env.NEXT_PUBLIC_TOKEN_KEY;
export const fileUrl: string | undefined = process.env.NEXT_PUBLIC_FILE_URL;
// Provide a default empty string if PANEL_URL is not defined
export const panelUrl: string = process.env.NEXT_PUBLIC_PANEL_URL || "";

const env = {
  apiUrlPrimary,
  apiUrlSecondary,
  tokenKey,
  fileUrl,
  panelUrl,
};

export default env;
