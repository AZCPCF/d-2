"use server";

import { fetcher } from "@/lib/fetcher";

/**
 * Input type for addToCart function
 */
interface AddToCartInput {
  stock_id: number;
  count: number;
}

/**
 * Response type returned by addToCart
 */
interface AddToCartResponse {
  success: boolean;
  errors: Record<string, string>;
  values: Record<string, unknown>;
}

/**
 * Sends a request to add a product to the cart.
 * @param input - Object containing stock ID and quantity to add.
 * @returns Result object with success status and error messages if any.
 */
export async function addToCart(
  input: AddToCartInput
): Promise<AddToCartResponse> {
  const { data: res } = await fetcher<{ message: string }>({
    endpoint: "user/cart",
    method: "POST",
    apiUrl: "secondary",
    body: input,
    cache: "no-store",
    headers: {
      "Cache-Control": "no-store",
    },
  });
  if (res.message !== "ok") {
    return {
      success: false,
      errors: { message: "Failed to add item to cart" },
      values: {},
    };
  }
  return {
    success: true,
    errors: {},
    values: {},
  };
}
