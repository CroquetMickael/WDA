import { Machine, assign } from "xstate";
import { login } from "./AuthService";
import { usernameValidator, passwordValidator } from "./AuthMachineValidator";

interface AuthStateSchema {
  states: {
    idle: {};
    usernameErr: {};
    passwordErr: {};
    loading: {};
  };
}

type AuthEvent =
  | { type: "USERNAME_CHANGE"; data: string }
  | { type: "PASSWORD_CHANGE"; data: string }
  | { type: "SUBMIT"; data: string };

export interface AuthMachineContext {
  username: string;
  usernameError: string;
  password: string;
  passwordError: string;
  error: string;
  id: string;
}

const context: AuthMachineContext = {
  username: "",
  usernameError: "",
  password: "",
  passwordError: "",
  error: "",
  id: ""
};

const AuthMachine = Machine<AuthMachineContext, AuthStateSchema, AuthEvent>(
  {
    id: "authentification",
    initial: "idle",
    context,
    states: {
      idle: {
        on: {
          USERNAME_CHANGE: {
            target: "idle",
            actions: [
              assign({
                username: (context, event) => event.data
              }),
              assign({
                usernameError: (context, event) => ""
              })
            ]
          },
          PASSWORD_CHANGE: {
            target: "idle",
            actions: [
              assign({
                password: (context, event) => event.data
              }),
              assign({
                passwordError: (context, event) => ""
              })
            ]
          },
          SUBMIT: [
            {
              cond: usernameValidator,
              actions: assign({
                usernameError: (context, event) => "Username is required"
              })
            },
            {
              cond: passwordValidator,
              actions: assign({
                passwordError: (context, event) => "Password is required"
              })
            },
            {
              target: "loading"
            }
          ]
        }
      },
      usernameErr: {
        on: {
          USERNAME_CHANGE: {
            target: "idle"
          }
        },
        states: {
          noUsername: {}
        }
      },
      passwordErr: {
        on: {
          PASSWORD_CHANGE: {
            target: "idle"
          }
        },
        states: {
          noPassword: {}
        }
      },
      loading: {
        invoke: {
          id: "login",
          src: context => login(context),
          onDone: {
            actions: assign({ id: (context, event) => event.data }),
            target: "idle"
          },
          onError: {
            actions: assign({ error: (context, event) => event.data }),
            target: "idle"
          }
        }
      }
    }
  },
  {
    guards: {
      passwordValidator: passwordValidator,
      usernameValidator: usernameValidator
    }
  }
);

export { AuthMachine };
