import { z } from "zod";

/**
 * Schema for validating product comment data.
 *
 * Fields:
 * - `message`: The comment text, minimum 5 characters required.
 * - `product_id`: The numeric ID of the product being commented on.
 */
export const CommentSchema = z.object({
  message: z
    .string()
    .min(5, "متن دیدگاه باید حداقل ۵ حرف باشد"), // Minimum length validation with custom error message
  product_id: z.number(),
});

/**
 * TypeScript type inferred from CommentSchema.
 * Use this type for strong typing comment data throughout the app.
 */
export type CommentSchemaValues = z.infer<typeof CommentSchema>;
