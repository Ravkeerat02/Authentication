// import { string, boolean, object } from "zod";
import { z } from "zod";

// import { UserRole } from "@prisma/client";

const SettingsSchema = z
  .object({
    name: z.string().optional(),
    isTwoFactorEnabled: z.boolean().optional(),
    email: z.string().email().optional(),
    password: z.string().min(6).optional(),
    newPassword: z.string().min(6).optional(),
  })
  .refine((data) => !(data.password && !data.newPassword), {
    message: "New password is required!",
    path: ["newPassword"],
  })
  .refine((data) => !(data.newPassword && !data.password), {
    message: "Password is required!",
    path: ["password"],
  });

const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum of 6 characters required",
  }),
});

const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  //   code: z.string().optional(),
});

const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

export {
  SettingsSchema,
  NewPasswordSchema,
  ResetSchema,
  LoginSchema,
  RegisterSchema,
};
