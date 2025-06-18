import React from "react";
import LoginForm from "../../components/other/LoginForm";

const LoginPage = () => {
  return (
    <React.Fragment>
      <section className="py-[100px] lg:py-[120px] bg-amber-100">
        <LoginForm />
      </section>
    </React.Fragment>
  );
};

export default LoginPage;
