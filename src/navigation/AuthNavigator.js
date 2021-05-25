import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";

const AuthNavigator = () => {
  const { path } = useRouteMatch();
  console.log(path);
  return (
    <>
      <Switch>
        <Route path={`/signup}`} component={SignUpForm} />
      </Switch>
      <Route path={path} exact>
        <SignInForm />
      </Route>
    </>
  );
};

export default AuthNavigator;
