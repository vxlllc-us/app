import React from "react";
import {withRouter, RouteComponentProps} from "react-router-dom";

import { strings } from "../../res";
import { config } from "../../lib";
import "./navbar.scss";

const logo = require("../../res/assets/images/logos/logo-black.png");
const { routes } = config;

class Navbar extends React.Component<RouteComponentProps<{}>, any>{
  navigateToHome = () => {
    this.props.history.push(routes.home);
  }

  render() {
    return (
      <nav className={"navbar"}>
        <div onClick={this.navigateToHome} className="logo-container">
          <img className={"logo"} alt={strings.navbar.s7} src={logo} />
        </div>
          <div className={"menu-icon-container"}>
            <div className={"bar"} />
            <div className={"bar"} />
            <div className={"bar"} />
              </div>
        <div className="navigation-container">
          <div className="nav-button">
            <span>{strings.navbar.s1}</span>
          </div>
          <div className="nav-button">
            <span>{strings.navbar.s2}</span>
          </div>
          <div className="nav-button">
            <span>{strings.navbar.s3}</span>
          </div>
          <div className="nav-button">
            <span>{strings.navbar.s4}</span>
          </div>
          <div className="nav-button">
            <span>{strings.navbar.s5}</span>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
