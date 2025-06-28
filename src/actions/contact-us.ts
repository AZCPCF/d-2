"use server";

import { ContactFormSchema } from "@/schemas/contact-us";
import { fetcher } from "@/lib/fetcher";

export async function submitContactForm(formData: FormData) {
  const raw = {
    subject: `${formData.get("subject")}`,
    full_name: `${formData.get("full_name")}`,
    phone_number: `${formData.get("phone_number")}`,
    email: `${formData.get("email")}`,
    message: `${formData.get("message")}`,
  };

  const parsed = ContactFormSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
      values: raw,
    };
  }

  const res = await fetcher<{ message: string }>({
    endpoint: "contact_us",
    apiUrl: "secondary",
    method: "POST",
    body: formData,
  });
  if (res.message === "ok") {
  }
  return {
    success: true,
    errors: {},
    values: {},
  };
}
