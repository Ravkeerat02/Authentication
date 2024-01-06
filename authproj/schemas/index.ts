// validation for front and back end

import * as z from "zod";

// login
export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
