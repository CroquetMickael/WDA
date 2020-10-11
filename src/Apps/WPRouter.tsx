import React, { FunctionComponent, useContext } from "react";
import { Redirect, RouteComponentProps, Router } from "@reach/router";
import { LoginContainer } from "../Pages/Login/LoginContainer";
import {
  AuthProvider,
  AuthContext,
  AppContextInterface
} from "../Components/Context/AuthContext/AuthContext";
import { InitContainer } from "../Pages/InitUser/InitContainer";
import { Home } from "../Pages/Home/HomeComponent";
import { SiteConnect } from "../Pages/Site";
import { SidebarProvider } from "../Components/Context/SidebarContext/SidebarContext";
import { NewContentComponent } from "../Pages/NewContent/NewContent.component";
import { TodoContainer } from "../Pages/Todo/TodoContainer";
import { CalendarContainer } from "../Pages/Calendar/Calendar.container";
type Props = { component: FunctionComponent } & RouteComponentProps;

const ProtectedRoute: FunctionComponent<Props> = ({
  component: Component,
  ...rest
}) => {
  const AuthValues: AppContextInterface = useContext(AuthContext);
  return (
    <>
      {AuthValues.isAuth ? (
        <Component {...rest} />
      ) : (
          <Redirect from="" to="/" noThrow />
        )}
    </>
  );
};

const PublicRoute: FunctionComponent<Props> = ({
  component: Component,
  ...rest
}) => <Component {...rest} />;

const WPRouter = () => (
  <>
    <SidebarProvider>
      <AuthProvider>
        <Router className="w-full h-full">
          <PublicRoute component={NewContentComponent} path="/" />
          <PublicRoute component={InitContainer} path="/initUser" />
          <ProtectedRoute component={Home} path="/home" />
          <PublicRoute component={TodoContainer} path="/todo" />
          <ProtectedRoute component={SiteConnect} path="/site" />
          <ProtectedRoute component={NewContentComponent} path="/newContent" />
          <ProtectedRoute component={CalendarContainer} path="/calendar" />
        </Router>
      </AuthProvider>
    </SidebarProvider>
  </>
);

export { WPRouter };
