import React from "react";
import { Outlet } from "react-router";

const MasterLayout = () => {
  return (
    <React.Fragment>
      <header>nav</header>
      <Outlet />
    </React.Fragment>
  );
};

export default MasterLayout;
