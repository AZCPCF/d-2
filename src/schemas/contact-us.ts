import { z } from "zod";

/**
 * Schema for validating contact form inputs.
 *
 * Fields:
 * - `subject`: Required string (at least 1 character).
 * - `full_name`: Required string (at least 1 character).
 * - `phone_number`: Required string matching Iranian mobile format (starts with 09 + 9 digits).
 * - `email`: Required string that must be a valid email.
 * - `message`: Required string (at least 1 character).
 */
export const ContactFormSchema = z.object({
  subject: z
    .string({ required_error: "موضوع الزامی است" })
    .min(1, "موضوع الزامی است"),
  full_name: z
    .string({ required_error: "نام و نام خانوادگی الزامی است" })
    .min(1, "نام و نام خانوادگی الزامی است"),
  phone_number: z
    .string({ required_error: "شماره موبایل الزامی است" })
    .regex(/^09\d{9}$/, "شماره موبایل نامعتبر است"),
  email: z
    .string({ required_error: "ایمیل الزامی است" })
    .email("ایمیل نامعتبر است"),
  message: z.string().min(1, "پیام الزامی است"),
});

/**
 * TypeScript type inferred from ContactFormSchema.
 * Use this type for strong typing contact form data throughout the app.
 */
export type ContactFormValues = z.infer<typeof ContactFormSchema>;
