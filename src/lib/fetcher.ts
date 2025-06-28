"use server";
import { apiUrlPrimary, apiUrlSecondary, tokenKey } from "@/utils/env";
import { cookies } from "next/headers";

type RequestOptions<B = unknown> = {
  endpoint: string;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers?: Record<string, string>;
  body?: B;
  params?: Record<string, string | number | boolean | undefined>;
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
  apiUrl?: "primary" | "secondary";
};

export const fetcher = async <T, B = unknown>({
  endpoint,
  method = "GET",
  headers: customHeaders = {},
  body,
  params,
  cache = "force-cache",
  apiUrl = "primary",
  next,
}: RequestOptions<B>): Promise<T> => {
  const cookieStore = await cookies();
  const token = cookieStore.get(tokenKey || "")?.value;

  const isFormData =
    typeof FormData !== "undefined" && body instanceof FormData;

  const headers: Record<string, string> = {
    ...(token ? { Authorization: token } : {}),
    ...customHeaders,
  };

  if (!isFormData && method !== "GET") {
    headers["Content-Type"] = "application/json";
  }

  const queryString = params
    ? `?${new URLSearchParams(
        Object.entries(params).reduce<Record<string, string>>(
          (acc, [key, value]) => {
            if (value !== undefined) acc[key] = String(value);
            return acc;
          },
          {}
        )
      ).toString()}`
    : "";

  const res = await fetch(
    `${
      apiUrl == "primary" ? apiUrlPrimary : apiUrlSecondary
    }${endpoint}${queryString}`,
    {
      method,
      headers,
      body: isFormData
        ? body
        : body
        ? JSON.stringify(body as Record<string, unknown>)
        : undefined,
      cache,
      next,
    }
  );

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(
      `API Error ${res.status}: ${res.statusText} - ${errorText}`
    );
  }

  return res.json() as Promise<T>;
};
