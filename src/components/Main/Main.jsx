import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../Login";
import Home from "../Home";
import PasswordReset from "../PasswordReset";
import Register from "../Register";
import Error from "../Error";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/home" component={Home} />
        <Route path="/password" component={PasswordReset} />
        <Route path="/register" component={Register} />
        <Route component={Error} />
      </Switch>
    </main>
  );
};

export default Main;
