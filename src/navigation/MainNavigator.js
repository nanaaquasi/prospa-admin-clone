import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import AuthPage from "../pages/AuthPage";
import Dashboard from "../pages/Dashboard";

const MainNavigator = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/signin" />
      <Route path="/signup" component={SignUpForm} />
      <Route path="/signin" component={SignInForm} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default MainNavigator;
