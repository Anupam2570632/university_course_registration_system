import { NextResponse } from "next/server";

export function middleware(request) {
  const userCookie = request.cookies.get("user")?.value;

  let user = null;
  try {
    if (userCookie) {
      user = JSON.parse(decodeURIComponent(userCookie));
    }
  } catch (error) {
    console.error("Failed to parse user cookie:", error);
  }

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
