import React from "react";
import { Outlet } from "react-router";
import AuthNavbar from "../components/base/AuthNavbar";

const AuthLayout = () => {
  return (
    <React.Fragment>
      <section className="max-h-screen sm:mx-10 lg:mx-[100px] my-3  ">
        <AuthNavbar />
        <Outlet />
      </section>
    </React.Fragment>
  );
};

export default AuthLayout;
