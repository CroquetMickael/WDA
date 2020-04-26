import React, { useContext, useEffect } from "react";
import { LoginComponent } from "./LoginComponent";
import {
  AuthContext,
  AppContextInterface
} from "../../Components/Context/AuthContext/AuthContext";
import { useMachine } from "@xstate/react";
import { AuthMachine } from "../../Components/Context/AuthContext/AuthMachine";
import { navigate } from "@reach/router";

const LoginContainer = () => {
  const authValues: AppContextInterface = useContext(AuthContext);
  const [current, send] = useMachine(AuthMachine);

  useEffect(() => {
    if (current.context.id) {
      authValues.setIsAuth(true);
      authValues.setID(current.context.id);
      navigate("/home");
    }
  }, [authValues, current]);

  const sendMachine = (type: any, value: any) => {
    send({ type: type, data: value });
  };
  return <LoginComponent currentMachine={current} send={sendMachine} />;
};

export { LoginContainer };
