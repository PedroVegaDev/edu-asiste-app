import { viewLogin } from "@/lib/drizzle/schemas";
import { db } from "@/lib/drizzle";
import { and, eq } from "drizzle-orm";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { dni, password } = body;

    if (!dni || !password) {
      return new Response(
        JSON.stringify({ message: "DNI and password are required" }),
        { status: 400 }
      );
    }

    const result = await db
      .select()
      .from(viewLogin)
      .where(
        and(
          eq(viewLogin.dni, dni as string),
          eq(viewLogin.password, password as string)
        )
      );

    if (result.length === 0) {
      return new Response(JSON.stringify({ message: "Invalid credentials" }), {
        status: 401,
      });
    }

    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}
