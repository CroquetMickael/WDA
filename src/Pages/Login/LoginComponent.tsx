import React from "react";
import { InputComponent } from "../../Components/Input/InputComponent";

interface LoginComponentProps {
  currentMachine: any;
  send: Function;
}
const LoginComponent = (props: LoginComponentProps) => (
  <div className="flex flex-col items-center flex-1 w-full h-full justify-center px-4 sm:px-0">
    <div className="flex rounded-lg shadow-lg w-full bg-white sm:w-3/4 sm:mx-0 LoginMaxHeight">
      <div className="flex flex-col w-full md:w-1/2 p-4">
        <div className="flex flex-col flex-1 justify-center mb-8">
          <h1 className="text-4xl text-center font-thin">Welcome !</h1>
          <div className="w-full mt-4">
            <div className="form-horizontal w-3/4 mx-auto">
              <div
                className={`text-center text-red-400 transition-opacity duration-100 ease-out ${
                  props.currentMachine.context?.error !== ""
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              >
                {props.currentMachine.context?.error}
              </div>
              <div className="flex flex-col mt-4">
                <InputComponent
                  placeholder="Username"
                  type="text"
                  onChange={(event: any) =>
                    props.send("USERNAME_CHANGE", event.target.value)
                  }
                />
                <p
                  className={`text-center text-red-400 transition-opacity duration-100 ease-out ${
                    props.currentMachine.context?.usernameError !== ""
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >{props.currentMachine.context?.usernameError}</p>
              </div>
              <div className="flex flex-col mt-4">
                <InputComponent
                  placeholder="Password"
                  type="password"
                  onChange={(event: any) =>
                    props.send("PASSWORD_CHANGE", event.target.value)
                  }
                />
                <p
                  className={`text-center text-red-400 transition-opacity duration-100 ease-out ${
                    props.currentMachine.context?.passwordError !== ""
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  {props.currentMachine.context?.passwordError}
                </p>
              </div>
              <div className="flex flex-col mt-8">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-semibold 
                  py-2 px-4 rounded inline-flex justify-center items-center"
                  onClick={e => props.send("SUBMIT", "")}
                >
                  <span className="mr-2">
                    {props.currentMachine.matches("loading")
                      ? `Loading... `
                      : "Login"}
                  </span>
                  {props.currentMachine.matches("loading") ? (
                    <span className="donut w-4 h-4"></span>
                  ) : null}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2 rounded-r-lg loginBackground">
        <svg
          className="inset-y-0 h-full fill-current text-white w-32 -ml-16"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
      </div>
    </div>
  </div>
);

export { LoginComponent };
