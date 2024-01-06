import { CardWrapper } from "./CardWrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backBtnLabel="Dont have an acct?"
      backBtnHref="/auth/register"
      showSocial
    >
      Login Form
    </CardWrapper>
  );
};
