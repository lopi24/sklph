import NextAuth from "next-auth";
import authConfig from "@/auth.config";

import {
  apiAuthRoute,
  authRoutes,
  charityRoutes,
  DEFAULT_LOGIN_REDIRECT,
  DEFAULT_REDIRECT,
  DRAFT_REDIRECT,
  publicRoutes,
} from "@/routes";

export const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
  const { nextUrl } = req;
  //   console.log(nextUrl);
  const isLoggedIn = !!req.auth;

  // -- routes
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isCharityRoutes = nextUrl.pathname.startsWith(charityRoutes);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthRoute);

  if (isApiAuthRoute) return;

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }

  if (!isLoggedIn && !isPublicRoute && !isCharityRoutes) {
    return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl));
  }

  return;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
