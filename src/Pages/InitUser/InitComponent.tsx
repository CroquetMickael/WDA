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
  <div className="w-screen h-screen bg-grey">
    <div className="flex flex-col items-center justify-center flex-1 h-full px-4 sm:px-0">
      <div className="flex w-full bg-white rounded-lg shadow-lg sm:w-3/4 sm:mx-0 LoginMaxHeight">
        <div className="flex flex-col w-full p-4 md:w-1/2">
          <div className="flex flex-col justify-center flex-1 mb-8">
            <h1 className="text-4xl font-thin text-center">Welcome !</h1>
            <div className="w-full mt-4">
              <div className="w-3/4 mx-auto form-horizontal">
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
                    className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
                    onClick={props.init}
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden rounded-r-lg md:block md:w-1/2 loginBackground">
          <svg
            className="inset-y-0 w-32 h-full -ml-16 text-white fill-current"
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
