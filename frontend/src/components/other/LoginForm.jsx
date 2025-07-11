import React, { useContext, useState } from "react";
import useLogin from "../../hooks/useLogin";
import { useNavigate } from "react-router";
import { authContext } from "../../contexts/AuthContextProvider";

const LoginForm = () => {
  const { setToken } = useContext(authContext);

  const { login: loginDef, isLoading, error } = useLogin();

  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async (e) => {
    try {
      e.preventDefault();
      const { result: token } = await loginDef("api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", JSON.stringify(token));
      setToken(token);
      return navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <React.Fragment>
      {error && (
        <>
          <div className="text-center text-red-500 text-sm p-2 px-2 bg-red-200 capitalize rounded mx-10 lg:mx-[425px]">
            {error}
          </div>
        </>
      )}
      <form className="space-y-5 max-w-md mx-auto mt-4" onSubmit={login}>
        <div>
          <label className="mb-2 text-sm text-slate-900 font-medium block">
            Email
          </label>
          <div className="relative flex items-center">
            <input
              type="email"
              placeholder="Enter Email"
              className="px-4 py-3 pr-10 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border border-gray-200 outline-[#007bff] rounded transition-all"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#bbb"
              stroke="#bbb"
              className="w-[18px] h-[18px] absolute right-4"
              viewBox="0 0 682.667 682.667"
            >
              <defs>
                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                  <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                </clipPath>
              </defs>
              <g
                // clip-path="url(#a)"
                transform="matrix(1.33 0 0 -1.33 0 682.667)"
              >
                <path
                  fill="none"
                  strokeMiterlimit="10"
                  strokeWidth="40"
                  d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                  data-original="#000000"
                ></path>
                <path
                  d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                  data-original="#000000"
                ></path>
              </g>
            </svg>
          </div>
        </div>

        <div>
          <label className="mb-2 text-sm text-slate-900 font-medium block">
            Password
          </label>
          <div className="relative flex items-center">
            <input
              type="password"
              placeholder="Enter Password"
              className="px-4 py-3 pr-10 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border border-gray-200 outline-[#007bff] rounded transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#bbb"
              stroke="#bbb"
              className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
              viewBox="0 0 128 128"
            >
              <path
                d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                data-original="#000000"
              ></path>
            </svg>
          </div>
        </div>

        <div className="flex items-center">
          <input type="checkbox" className="w-4 h-4 shrink-0" />
          <label className="text-sm text-slate-900 ml-3">Remember me</label>
        </div>

        <button
          type="submit"
          className="px-5 py-2.5 w-full cursor-pointer !mt-4 text-sm font-medium bg-[#007bff] hover:bg-blue-600 text-white rounded active:bg-[#006bff]"
          disabled={isLoading}
        >
          Submit
        </button>
      </form>
    </React.Fragment>
  );
};

export default LoginForm;
