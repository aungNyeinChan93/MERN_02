import { createContext, useState } from "react";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [token, setToken] = useState("");
  return (
    <authContext.Provider value={{ auth, setAuth, token, setToken }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
