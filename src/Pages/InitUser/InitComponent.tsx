import React from "react";
import { InputComponent } from "../../Components/Input/InputComponent";
interface InitProps
  extends Readonly<{
    url: string;
    password: string;
    username: string;
    setUsername: Function;
    setPassword: Function;
    setUrl: Function;
    init: () => void;
  }> {}

const InitComponent = (props: InitProps) => (
  <div className="bg-grey h-screen w-screen">
    <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
      <div className="flex rounded-lg shadow-lg w-full bg-white sm:w-3/4 sm:mx-0 LoginMaxHeight">
        <div className="flex flex-col w-full md:w-1/2 p-4">
          <div className="flex flex-col flex-1 justify-center mb-8">
            <h1 className="text-4xl text-center font-thin">Welcome !</h1>
            <div className="w-full mt-4">
              <div className="form-horizontal w-3/4 mx-auto">
                <div className="flex flex-col mt-4">
                  <InputComponent
                    type="text"
                    placeholder="username"
                    onChange={(event: any) =>
                      props.setUsername(event?.target.value)
                    }
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <InputComponent
                    type="password"
                    placeholder="password"
                    onChange={(event: any) =>
                      props.setPassword(event?.target.value)
                    }
                  />
                  <div className="flex flex-col mt-4"></div>
                  <InputComponent
                    type="text"
                    onChange={(event: any) => props.setUrl(event.target.value)}
                    placeholder="url"
                  />
                </div>
                <div className="flex flex-col mt-8">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white 
                    text-sm font-semibold py-2 px-4 rounded"
                    onClick={props.init}
                  >
                    Sign In
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
  </div>
);

export { InitComponent };
