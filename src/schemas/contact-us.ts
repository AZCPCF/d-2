import { z } from "zod";

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

export type ContactFormValues = z.infer<typeof ContactFormSchema>;
