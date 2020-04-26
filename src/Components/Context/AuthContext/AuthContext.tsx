import React, { useState, Component, FunctionComponentElement } from "react";
import { navigate } from "@reach/router";
export interface AppContextInterface {
  callback: string;
  isAuth: boolean;
  setID: Function;
  setIsAuth: Function;
  logout: () => void;
  id: number;
}
interface AuthProps {
  children: FunctionComponentElement<Component>;
}

const AuthContext = React.createContext<any>(null);

const AuthProvider = (props: AuthProps) => {
  const [isAuth, setIsAuth] = useState(false);
  const [id, setID] = useState("");

  const logout = () => {
    navigate("/");
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{
        id,
        isAuth,
        setIsAuth,
        setID,
        logout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
