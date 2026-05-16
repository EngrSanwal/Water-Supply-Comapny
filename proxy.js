import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";

const intlMiddleware = createMiddleware({
  locales: ["ar", "en"],
  defaultLocale: "ar",
  localePrefix: "always" // IMPORTANT CHANGE (STRICT MODE)
});

export default function middleware(req) {
  const { pathname } = req.nextUrl;

  // FORCE ROOT ALWAYS ARABIC
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/ar", req.url));
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"]
};