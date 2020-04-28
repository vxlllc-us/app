import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import { Home, Career } from "../";
import { Navbar } from "../../components";
import { store, config } from "../../lib";
import { theme } from "../../res";
import * as modules from "./wrapper.module";
import Login from "../login/login.page";

const { routes } = config;
const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.secondary};
  }
`;

export default class Wrapper extends React.Component {
  componentDidMount() {
    modules.setup();
  }

  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router>
            <Navbar />
            <Switch>
              <Route exact path={routes.home} component={Home} />
              <Route exact path={routes.career} component={Career} />
                <Route exact path={"/app/login"} component={Login} />
            </Switch>
          </Router>
        </ThemeProvider>
      </Provider>
    );
  }
}
