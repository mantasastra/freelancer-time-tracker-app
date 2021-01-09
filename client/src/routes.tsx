import React from "react";
import { Route, Switch } from "react-router-dom";

import NewSession from "./pages/newSession/NewSession";
import Overview from "./pages/overview/Overview";
import Sessions from "./pages/sessions/Sessions";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={NewSession} />
    <Route exact path="/sessions" component={Sessions} />
    <Route exact path="/overview" component={Overview} />
  </Switch>
);

export default Routes;
