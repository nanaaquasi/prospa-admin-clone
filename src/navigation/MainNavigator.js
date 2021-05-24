import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import Dashboard from "../pages/Dashboard";

const MainNavigator = () => {
  return (
    <Switch>
      <Route path="/" />
      <Route path="/dashboard" />
    </Switch>
  );
};

export default MainNavigator;
