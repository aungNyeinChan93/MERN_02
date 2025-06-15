import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/base/Navbar";

const MasterLayout = () => {
  return (
    <React.Fragment>
      <div className="mx-2 lg:mx-[100px] py-3  h-screen">
        <Navbar />
        <Outlet />
      </div>
    </React.Fragment>
  );
};

export default MasterLayout;
