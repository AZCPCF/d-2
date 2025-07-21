"use server";

import { fetcher } from "@/lib/fetcher";

export async function toggleReminder(productId: number) {
  const { status,data } = await fetcher({
    endpoint: `user/reminder/${productId}`,
    apiUrl: "secondary",
    method: "GET",
  });

  return {
    res:data,
    success: status === 200,
  };
}
