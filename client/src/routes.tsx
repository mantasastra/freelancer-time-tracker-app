import React from "react";
import { Route, Switch } from "react-router-dom";

import NewSession from "./pages/newSession/NewSession";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={NewSession} />
  </Switch>
);

export default Routes;
