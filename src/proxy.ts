import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { auth } from "./auth";

export async function proxy(request: NextRequest) {
  const session = await auth();

  if (!session?.user.id) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/services/payment/:path*",
};
