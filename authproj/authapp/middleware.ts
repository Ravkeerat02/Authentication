// not next-ath specifc rather next js
import { auth } from "./auth";
import authConfig from "./auth.config";
import NextAuth from "next-auth";
export const { auth: middleware } = NextAuth(authConfig);

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  // req.auth
  console.log("ROUTE", req.nextUrl.pathname);
  console.log("Logged in", isLoggedIn);
});

// wont be used to check public or pvt . rather to invoke the middleware fucntion

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
