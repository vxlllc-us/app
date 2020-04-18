import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import { Home } from "../";
import { Navbar } from "../../components";
import { config } from "../../lib";
import { theme } from "../../res";

const { routes } = config;
const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.secondary};
  }
`;

export default class Wrapper extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Navbar />
          <Switch>
            <Route path={routes.home} component={Home} />
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}
