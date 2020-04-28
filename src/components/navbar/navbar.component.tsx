import React, { ReactElement } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { strings, theme } from "../../res";
import { config } from "../../lib";
import "./navbar.scss";
import { IOption } from "../../lib/types";

const _logo = require("../../res/assets/images/logos/logo-black.png");
const _logoWhite = require("../../res/assets/images/logos/logo-white.png");
const { routes } = config;

interface IState {
  pos: number;
  logo: any;
  show: boolean;
}
type IProps = RouteComponentProps<{}>;
class Navbar extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      pos: 0,
      logo: _logo,
      show: false
    };

    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    const { innerHeight, innerWidth } = window;
    console.log("innerHeight: ", innerHeight);
    console.log("innerWidth: ", innerWidth);
    if (innerWidth > 768) {
      this.setState({
        show: false
      });
    }
  };

  toggleDrawer = () => {
    if (window.innerWidth > 768) {
      return;
    }
    this.setState({
      show: !this.state.show
    });
  };

  handleScroll = () => {
    const old: number = this.state.pos;
    const current: number = window.pageYOffset;
    const navbar: HTMLElement = document.getElementsByClassName(
      "navbar"
    )[0] as HTMLElement;
    const menuIcon: HTMLElement = document.getElementsByClassName(
      "menu-icon"
    )[0] as HTMLElement;

    if (current > old) {
      if (current > 0 && current <= 500) {
        // scrolling down
        if (navbar) {
          navbar.style.backgroundColor = theme.primary;
          navbar.style.boxShadow = "3px 0 5px #000";
        }
      } else if (current > 500) {
        // scrolling down
        if (navbar) {
          this.setState({
            logo: _logoWhite
          });
          menuIcon.style.color = theme.secondaryText;
          navbar.style.color = theme.secondaryText;
          navbar.style.backgroundColor = theme.secondary;
          navbar.style.transitionDuration = "200ms";
          navbar.style.boxShadow = "3px 0 5px #000";
        }
      }
    } else if (current < old && current <= 500) {
      // scrolling up
      if (navbar) {
        this.setState({
          logo: _logo
        });
        menuIcon.style.color = theme.secondary;
        navbar.style.color = theme.secondary;
        navbar.style.backgroundColor = theme.primary;
        navbar.style.transitionDuration = "200ms";
        navbar.style.boxShadow = "none";
      }
    }
    this.setState({
      pos: current
    });
  };

  renderOption = (option: IOption): ReactElement => {
    return (
      <div className="nav-button">
        <a onClick={this.handleNavigationalClick} href={option.href}>
          <span>{option.title}</span>
        </a>
      </div>
    );
  };

  renderOptions = (): ReactElement[] => {
    return config.options.map((option: IOption) => {
      return this.renderOption(option);
    });
  };

  navigateToHome = () => {
    const { pathname } = this.props.location;
    if (pathname.split("/").length > 3) {
      this.props.history.push(routes.home);
    } else {
      window.scrollTo(0, 0);
    }
  };

  handleNavigationalClick = () => {
    this.toggleDrawer();
    return true;
  };

  render() {
    return (
      <nav id={"navbar"} className={"navbar"}>
        <div className="container">
          <div onClick={this.navigateToHome} className="navbar-brand">
            <img
              className={"logo"}
              alt={strings.navbar.s7}
              src={this.state.logo}
            />
          </div>
          <div className={"menu-icon-container"}>
            <FontAwesomeIcon
              onClick={this.toggleDrawer}
              className={"menu-icon"}
              icon={faBars}
            />
          </div>
          <div className={`drawer ${this.state.show && "show"}`}>
            <FontAwesomeIcon
              onClick={this.toggleDrawer}
              className={"close-button"}
              icon={faTimes}
            />
            {this.renderOptions()}
          </div>
          <div className="navigation-container">{this.renderOptions()}</div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
