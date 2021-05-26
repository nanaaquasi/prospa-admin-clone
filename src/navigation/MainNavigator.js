import { AnimatePresence } from "framer-motion";
import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import Dashboard from "../pages/Dashboard";

const MainNavigator = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Redirect exact from="/" to="/signin" />
        <Route path="/signup" component={SignUpForm} />
        <Route path="/signin" component={SignInForm} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </AnimatePresence>
  );
};

export default MainNavigator;
