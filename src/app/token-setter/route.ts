import { appUrl } from "@/utils/env";
import { cookies } from "next/headers";

export async function POST(request: Request): Promise<Response> {
  try {
    const body = (await request.json()) as { token?: string };
    const { token } = body;

    if (!token) {
      return new Response(JSON.stringify({ error: "Token is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
    const nextCookies = await cookies();
    const age = 60 * 60 * 24 * 365;
    nextCookies.set("_2ktd__", token, { maxAge: age, expires: age });

    return new Response(
      JSON.stringify({ message: "Token received and set", appUrl }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
