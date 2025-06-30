"use server";

import { fetcher } from "@/lib/fetcher";
import { CommentSchema } from "@/schemas/add-comment";

export async function submitProductComment(formData: FormData) {
  const raw = {
    message: `${formData.get("message")}`,
    productId: Number(formData.get("productId")),
  };

  const parsed = CommentSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
      values: raw,
    };
  }

  const res = await fetcher<{ message: string }>({
    endpoint: "product_comments",
    method: "POST",
    body: formData,
  });

  return {
    success: res.message === "ok",
    errors: {},
    values: {},
  };
}
