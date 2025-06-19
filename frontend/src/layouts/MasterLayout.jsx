import React, { useContext, useEffect } from "react";
import { Outlet, useLoaderData } from "react-router";
import Navbar from "../components/base/Navbar";
import { authContext } from "../contexts/AuthContextProvider";

const MasterLayout = () => {
  const { auth } = useLoaderData();

  const { setAuth } = useContext(authContext);

  useEffect(() => {
    setAuth(auth);
  }, [auth, setAuth]);

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
