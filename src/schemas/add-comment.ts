import { z } from "zod";

export const CommentSchema = z.object({
  message: z.string().min(5, "متن دیدگاه باید حداقل ۵ حرف باشد"),
  productId: z.number(),
});

export type CommentSchemaValues = z.infer<typeof CommentSchema>;
