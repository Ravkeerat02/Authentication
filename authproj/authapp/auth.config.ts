import GitHub from "next-auth/providers/github";

import type { NextAuthConfig } from "next-auth";
// triggers the adapter - middlware
export default {
  providers: [GitHub],
} satisfies NextAuthConfig;
