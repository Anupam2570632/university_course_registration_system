import { NextResponse } from "next/server";
import { getCurrentUser } from "./app/action";

export async function middleware(request) {

  const user = await getCurrentUser();

  const { pathname } = request.nextUrl;

  if (!user || !user.username) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/course", "/about"],
};
