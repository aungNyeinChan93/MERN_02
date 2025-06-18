import React from "react";
import RegisterForm from "../../components/other/RegisterForm";

const RegisterPage = () => {
  return (
    <React.Fragment>
      <section className=" pt-[100px] lg:py-[80px] bg-amber-100 ">
        <RegisterForm />
      </section>
    </React.Fragment>
  );
};

export default RegisterPage;
