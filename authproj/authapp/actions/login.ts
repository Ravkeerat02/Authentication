"use server";
import * as z from "zod";
import { LoginSchema } from "../schemas/Index";
// login

export const login = async (values: z.infer<typeof LoginSchema>) => {
  //   console.log(values);
  // validation
  //   safe parse - validate data - instead of error - object is retuned
  const validatedForm = LoginSchema.safeParse(values);

  if (!validatedForm.success) {
    return { error: "Invalid Data" };
  }

  return { success: "It was successful " };
};
