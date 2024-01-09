"use server";
import * as z from "zod";
import { RegisterSchema } from "../schemas/Index";
// login

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  //   console.log(values);
  // validation
  //   safe parse - validate data - instead of error - object is retuned
  const validatedForm = RegisterSchema.safeParse(values);

  if (!validatedForm.success) {
    return { error: "Invalid Data" };
  }

  return { success: "It was successful " };
};
