"use server";

import { apiUrlPrimary, apiUrlSecondary, tokenKey } from "@/utils/env";
import { cookies } from "next/headers";

/**
 * Options for the fetcher function.
 *
 * @template B - Type of the request body.
 */
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
 * Generic fetcher utility for server-side API requests.
 * Supports JSON and FormData bodies, query parameters, and automatic token auth from cookies.
 *
 * @template T - Expected response JSON shape.
 * @template B - Request body type.
 * @param options - Configuration for the API request.
 * @returns Parsed JSON response as type T.
 * @throws Throws an error if response is not OK (status outside 200-299).
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
}: RequestOptions<B>): Promise<T> => {
  // Retrieve auth token from cookies
  const cookieStore = await cookies();
  const token = cookieStore.get(tokenKey || "")?.value;

  // Detect if body is FormData (for file uploads, etc.)
  const isFormData =
    typeof FormData !== "undefined" && body instanceof FormData;

  // Compose request headers
  const headers: Record<string, string> = {
    ...(token ? { Authorization: token } : {}),
    ...customHeaders,
  };

  // If not FormData and not GET, set content type to JSON
  if (!isFormData && method !== "GET") {
    headers["Content-Type"] = "application/json";
  }

  // Build query string from params object
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

  // Perform the fetch request
  const res = await fetch(
    `${
      apiUrl === "primary" ? apiUrlPrimary : apiUrlSecondary
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

  // Throw if HTTP response status is not OK
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(
      `API Error ${res.status}: ${res.statusText} - ${errorText}`
    );
  }

  // Parse and return JSON response
  return res.json() as Promise<T>;
};
