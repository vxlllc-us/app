import React from "react";
import { ScaleLoader } from "react-spinners";
import { auth, UserInfo } from "firebase";

import "./login.scss";
import { theme } from "../../res";
import * as wrapperModules from "../wrapper/wrapper.module";

const google = require("../../res/assets/images/logos/google.png");
const logo = require("../../res/assets/images/logos/logo-black.png");

interface State {
  loading: boolean;
  user: UserInfo | null;
}
class Login extends React.Component<any, State> {
  state: State = {
    loading: false,
    user: null
  };

  async componentDidMount() {
    this.setState({
      loading: true
    });
    wrapperModules.setup();
    auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user
        });
      }
      this.setState({
        loading: false
      });
    });
  }

  onLogin = () => {
    const provider = new auth.GoogleAuthProvider();
    auth()
      .signInWithPopup(provider)
      .then((result: any) => {
        const token = result.credential.accessToken;
        const user: UserInfo = result.user;
        console.log("token: ", token);
        console.log("user: ", user);
        this.setState({
          loading: false,
          user
        });
      })
      .catch(error => {
        console.log("error: ", error);
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        this.setState({
          loading: false
        });
      });
  };

  onLogout = () => {
    this.setState({
      loading: true
    });
    auth()
      .signOut()
      .then(() => {
        this.setState({
          loading: false,
          user: null
        });
      })
      .catch(err => {
        this.setState({
          loading: false
        });
      });
  };

  renderButton = () => {
    if (this.state.loading) {
      return null;
    }
    if (this.state.user) {
      return (
        <button className={"logout"} onClick={this.onLogout}>
          Logout
        </button>
      );
    }

    return (
      <button className={"login"} onClick={this.onLogin}>
        <img src={google} />
        <h4>Login with Google</h4>
      </button>
    );
  };

  render() {
    return (
      <div className="login-root">
        <div className="container">
          <img className={"logo"} src={logo} />
          {this.state.loading && (
            <ScaleLoader
              color={theme.secondary}
              height={12}
              width={4}
              radius={2}
              margin={2}
            />
          )}
          {this.renderButton()}
        </div>
      </div>
    );
  }
}

export default Login;
