"use client";
import { CardWrapper } from "./CardWrapper";
// form
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormItem, FormLabel, FormMessage } from "../ui/form";
// DATA
import { LoginSchema } from "../../schemas/Index";
import { FormControl, FormField } from "../ui/form";
// input
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";

export const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // submit function
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log(values);
  };

  return (
    <CardWrapper
      headerLabel="Welcome back"
      backBtnLabel="Dont have an acct?"
      backBtnHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            {/* email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="janedoe@abc.com"
                      type="email"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            {/* password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="******"
                      // abc123
                      type="password"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          {/* error */}
          <FormError message="" />
          {/* success */}
          <FormSuccess message="" />
          <Button className="w-full  " type="submit">
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
