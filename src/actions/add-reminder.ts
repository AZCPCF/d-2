"use server";

import { fetcher } from "@/lib/fetcher";

export async function toggleReminder(productId: number) {
  const { status, data } = await fetcher({
    endpoint: `user/reminder/${productId}`,
    apiUrl: "secondary",
    cache: "no-store",
    headers: {
      "Cache-Control": "no-store",
    },
    method: "GET",
  });

  return {
    res: data,
    success: status === 200,
  };
}
