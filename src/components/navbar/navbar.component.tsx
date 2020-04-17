import React from "react";
import {} from "react-router-dom";

import { strings } from "../../res";
import "./navbar.scss";

const logo = require("../../res/assets/images/logos/logo-black.png");

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className={"navbar"}>
        <div className="logo-container">
          <img className={"logo"} alt={strings.navbar.s7} src={logo} />
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
