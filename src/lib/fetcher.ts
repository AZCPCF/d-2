"use server";

import { apiUrlPrimary, apiUrlSecondary, tokenKey } from "@/utils/env";
import { cookies } from "next/headers";

type RequestOptions<B = unknown> = {
  endpoint: string;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers?: Record<string, string>;
  body?: B;
  params?: Record<string, string | number | boolean | undefined | string[]>;
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
  apiUrl?: "primary" | "secondary";
};

/**
 * Generic fetcher with metadata.
 *
 * @template T - Parsed response data type.
 * @template B - Request body type.
 * @returns Object containing response `data`, `status`, `ok`, and `headers`.
 */
export const fetcher = async <T, B = unknown>({
  endpoint,
  method = "GET",
  headers: customHeaders = {},
  body,
  params,
  cache = "force-cache",
  apiUrl = "primary",
  next,
}: RequestOptions<B>): Promise<{
  data: T;
  status: number;
  ok: boolean;
  headers: Headers;
}> => {
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
    ? `?${apiUrl == "secondary" ? "password=alisun" : ""}${new URLSearchParams(
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
      apiUrl === "primary" ? apiUrlPrimary : apiUrlSecondary
    }${endpoint}${queryString}`,
    {
      method,
      headers,
      body: isFormData
        ? (body as BodyInit)
        : body
        ? JSON.stringify(body as Record<string, unknown>)
        : undefined,
      cache,
      next,
    }
  );

  const contentType = res.headers.get("content-type");
  let data: any = null;

  if (contentType?.includes("application/json")) {
    data = await res.json();
  } else {
    data = await res.text(); // fallback for non-JSON (optional)
  }
  if (res.status == 401) {
    return {
      data: data?.data ?? data,
      status: res.status,
      ok: res.ok,
      headers: res.headers,
    };
  }
  if (!res.ok) {
    throw new Error(
      `API Error ${res.status}: ${res.statusText} - ${JSON.stringify(data)}`
    );
  }
  return {
    data: data?.data ?? data, // auto-extract `data` field if exists
    status: res.status,
    ok: res.ok,
    headers: res.headers,
  };
};
