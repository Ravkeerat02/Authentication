import { PrismaClient } from "@prisma/client";
// not affected by reload
declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

// if not in prod - store in local - use it as per the run(test) case
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
