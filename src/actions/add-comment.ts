"use server";

import { fetcher } from "@/lib/fetcher";
import { CommentSchema } from "@/schemas/add-comment";

interface SubmitProductCommentResult {
  success: boolean;
  errors: Record<string, string[]>;
  values: Record<string, unknown>;
}

/**
 * Validates and submits a product comment.
 *
 * @param formData - FormData containing `message` and `product_id`.
 * @returns Object with success flag, validation errors (if any), and submitted values.
 */
export async function submitProductComment(
  formData: FormData
): Promise<SubmitProductCommentResult> {
  // Extract and prepare raw data from formData
  const raw = {
    message: String(formData.get("message") ?? ""),
    product_id: Number(formData.get("product_id")),
  };

  // Validate input using Zod schema
  const parsed = CommentSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
      values: raw,
    };
  }

  // Submit validated formData to API
  const { data: res } = await fetcher<{ message: string }>({
    endpoint: "user/comment",
    method: "POST",
    apiUrl: "secondary",
    body: formData,
  });
  console.log(res);
  // Return result status
  return {
    success: res.message === "ok",
    errors: {},
    values: {},
  };
}
