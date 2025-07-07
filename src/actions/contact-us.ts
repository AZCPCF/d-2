"use server";

import { ContactFormSchema } from "@/schemas/contact-us";
import { fetcher } from "@/lib/fetcher";

interface SubmitContactFormResult {
  success: boolean;
  errors: Record<string, string[]>;
  values: Record<string, unknown>;
}

/**
 * Validates and submits a contact form.
 *
 * @param formData - FormData object containing contact form fields.
 * @returns Object indicating success status, validation errors, and submitted values.
 */
export async function submitContactForm(
  formData: FormData
): Promise<SubmitContactFormResult> {
  // Extract raw form values safely
  const raw = {
    subject: String(formData.get("subject") ?? ""),
    full_name: String(formData.get("full_name") ?? ""),
    phone_number: String(formData.get("phone_number") ?? ""),
    email: String(formData.get("email") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  // Validate form input against schema
  const parsed = ContactFormSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
      values: raw,
    };
  }

  // Submit the form data using the secondary API URL
  const res = await fetcher<{ message: string }>({
    endpoint: "contact_us",
    apiUrl: "secondary",
    method: "POST",
    body: formData,
  });

  // Return success if API responded with 'ok'
  return {
    success: res.message === "ok",
    errors: {},
    values: {},
  };
}
