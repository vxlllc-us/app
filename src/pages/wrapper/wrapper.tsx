import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "../";
import { config } from "../../lib";

const { routes } = config;

export default class Wrapper extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={routes.home} component={Home} />
        </Switch>
      </Router>
    );
  }
}
