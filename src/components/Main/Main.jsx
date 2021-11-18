import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../Login";
import Home from "../Home";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/home" component={Home} />
      </Switch>
    </main>
  );
};

export default Main;
