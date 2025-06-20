import React, { useContext, useEffect } from "react";
import { Outlet, useLoaderData } from "react-router";
import Navbar from "../components/base/Navbar";
import { authContext } from "../contexts/AuthContextProvider";

const MasterLayout = () => {
  const { auth, token } = useLoaderData();

  const { setAuth, setToken } = useContext(authContext);

  useEffect(() => {
    setAuth(auth);
    setToken(token);
  }, [auth, token]);

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
