"use client";
import { CardWrapper } from "./CardWrapper";
// form
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormItem, FormLabel, FormMessage } from "@components/form";
// DATA
import { LoginSchema } from "@/schemas";
import { FormField } from "../ui/form";
// input 
import { Input } from "@components/ui/input";
export const LoginForm = () => {
  const form =
    useForm <
    z.infer<typeof LoginSchema>({
      resolver: zodResolver(LoginSchema),
      defaultValue: {
        email: "",
        password: "",
      },
    });
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backBtnLabel="Dont have an acct?"
      backBtnHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handlSubmit(() => {})} className="space-y-6">
          {/* store the input */}
          <div className="space-y-4">
            <FormField control={form.control} name="email" render={{ field } =>(
              <FormItem>
                <FormLabel>Email</FormLabel>
                <input {...field} type="email" />
              </FormItem>
            )} />
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};
