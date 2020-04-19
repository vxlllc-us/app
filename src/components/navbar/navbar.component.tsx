import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { strings } from "../../res";
import { config } from "../../lib";
import "./navbar.scss";

const _logo = require("../../res/assets/images/logos/logo-black.png");
const _logoWhite = require("../../res/assets/images/logos/logo-white.png");
const { routes } = config;

interface IState {
  pos: number;
  logo: any;
}
type IProps = RouteComponentProps<{}>;
class Navbar extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      pos: 0,
      logo: _logo
    };

    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const old: number = this.state.pos;
    const current: number = window.pageYOffset;

    console.log("current: ", current);
    console.log("old: ", old);

    if (current > old) {
      if (current > 0 && current <= 500) {
        // scrolling down
        const element: HTMLElement = document.getElementsByClassName(
          "navbar"
        )[0] as HTMLElement;
        if (element) {
          element.style.backgroundColor = "#fbfbfb";
          element.style.boxShadow = "3px 0 5px #000";
        }
      } else if (current > 500) {
        // scrolling down
        const element: HTMLElement = document.getElementsByClassName(
          "navbar"
        )[0] as HTMLElement;
        if (element) {
          this.setState({
            logo: _logoWhite
          });
          element.style.color = "#fbfbfb";
          element.style.backgroundColor = "#0a0a0a";
          element.style.transitionDuration = "200ms";
          element.style.boxShadow = "3px 0 5px #000";
        }
      }
    } else if (current < old && current <= 500) {
      // scrolling up
      const element: HTMLElement = document.getElementsByClassName(
        "navbar"
      )[0] as HTMLElement;
      if (element) {
        this.setState({
          logo: _logo
        });
        element.style.color = "#0a0a0a";
        element.style.backgroundColor = "#fbfbfb";
        element.style.transitionDuration = "200ms";
        element.style.boxShadow = "none";
      }
    }
    this.setState({
      pos: current
    });
  };

  navigateToHome = () => {
    this.props.history.push(routes.home);
  };

  render() {
    return (
      <nav id={"navbar"} className={"navbar"}>
        <div onClick={this.navigateToHome} className="navbar-brand">
          <img
            className={"logo"}
            alt={strings.navbar.s7}
            src={this.state.logo}
          />
        </div>
        <div className={"menu-icon-container"}>
          <FontAwesomeIcon className={"menu-icon"} icon={faBars} />
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
