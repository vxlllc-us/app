import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { Field, InjectedFormProps, reset, reduxForm } from "redux-form";

import "./home.scss";
import "../../index.scss";
import { strings, theme } from "../../res";
import {
  config,
  IJob,
  IService,
  IMessage,
  IPartner,
  ICustomer
} from "../../lib";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import * as modules from "./home.module";
import { TextArea, Input } from "../../components";

const { services, jobs, customers, partners } = config;
const base: string = "../../res/assets/images/logos/";

type Props = RouteComponentProps<{}> & InjectedFormProps<any, any> & ReduxType;
type State = modules.State;
class Home extends React.Component<Props, State> {
  state: State = {
    submitting: false,
    submitted: false,
    error: null,
    message: "",
    name: "",
    email: ""
  };

  getImagePath = (name: string) => {
    const image = require(`${base}${name}`);
    return image;
  };

  renderServices = () => {
    return services.map((service: IService) => {
      return (
        <div className="service-card" key={service.name}>
          <FontAwesomeIcon className={"service-icon"} icon={service.icon} />
          <span className="service-name">{service.name}</span>
          <span className="service-description">{service.description}</span>
        </div>
      );
    });
  };

  renderCustomers = () => {
    return customers.map((customer: ICustomer) => {
      return (
        <div className="customer-card" key={customer.name}>
          <img src={customer.logo} className={"customer-logo"} />
          <span className="customer-name">{customer.name}</span>
        </div>
      );
    });
  };

  renderPartners = () => {
    return partners.map((partner: IPartner) => {
      return (
        <div className="partner-card" key={partner.name}>
          <img src={partner.logo} className={"partner-logo"} />
          <span className="partner-name">{partner.name}</span>
        </div>
      );
    });
  };

  renderJobs = () => {
    return jobs.map((job: IJob) => {
      return (
        <div
          onClick={() => this.onJobClicked(job.id)}
          className={"job-card"}
          key={job.title}
        >
          <span className={"job-title"}>{job.title}</span>
          <div className={"job-icon-container"}>
            <FontAwesomeIcon className={"job-icon"} icon={faArrowRight} />
          </div>
        </div>
      );
    });
  };

  renderContactUsForm = () => {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onFormSubmit)}
        className={"form"}
      >
        <div className={"input-row"}>
          <Field
            type={"text"}
            component={Input}
            autoComplete={"off"}
            name={"name"}
            placeholder={strings.home.s13}
          />
        </div>
        <div className={"input-row"}>
          <Field
            type={"text"}
            component={Input}
            autoComplete={"off"}
            name={"email"}
            placeholder={strings.home.s14}
          />
        </div>
        <div className={"input-row"}>
          <Field
            type={"text"}
            component={TextArea}
            rows={10}
            autoComplete={"off"}
            name={"message"}
            placeholder={strings.home.s15}
          />
        </div>
        <div className={"input-row"}>
          <button
            disabled={
              !this.props.valid || this.state.submitting || this.state.submitted
            }
            onClick={this.onFormSubmit}
          >
            {this.renderSubmitButton()}
          </button>
        </div>
      </form>
    );
  };

  renderSubmitButton = () => {
    if (this.state.submitting) {
      return (
        <ScaleLoader
          color={theme.primary}
          height={12}
          width={4}
          radius={2}
          margin={2}
        />
      );
    }
    if (this.state.submitted) {
      return <span>{strings.home.s17}</span>;
    }
    return <span>{strings.home.s16}</span>;
  };

  onJobClicked = (id: string) => {
    this.props.history.push(`/app/career/${id}`);
  };

  onFormSubmit = async (
    e: React.FormEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    this.setState({
      submitting: true
    });

    try {
      const message: IMessage = {
        ...this.props.form.contactUs.values
      };

      const success: boolean = await modules.submitMessage(message);
      if (success) {
        this.setState({
          error: null,
          submitting: false,
          submitted: true,
          name: "",
          email: "",
          message: ""
        });
        this.props.reset();

        setTimeout(() => {
          this.setState({
            submitted: false,
            error: null
          });
        }, 1500);
      } else {
        this.setState({
          error: "Something went wrong, please try again after some time.",
          submitting: false,
          submitted: false
        });
      }
    } catch (err) {
      this.setState({
        submitting: false,
        error: err.message
      });
    }
  };

  onEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({
      email: e.target.value
    });
  };

  onMessageInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    this.setState({
      message: e.target.value
    });
  };

  onNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({
      name: e.target.value
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <section id={"section-one"} className={"section-one"}>
          <h1>{strings.home.s1}</h1>
          <h6>{strings.home.s2}</h6>
        </section>

        <section id={"section-two"} className="container section-two">
          <div className="section-header">
            <h1>{strings.home.s3}</h1>
            <p>{strings.home.s8}</p>
          </div>
          <div className={"services-container"}>{this.renderServices()}</div>
        </section>

        <section id={"section-three"} className="container section-three">
          <div className="section-header">
            <h1>{strings.home.s9}</h1>
          </div>
          <div className={"customers-container"}>{this.renderCustomers()}</div>
        </section>

        <section id={"section-four"} className="container section-four">
          <div className="section-header">
            <h1>{strings.home.s10}</h1>
          </div>
          <div className={"partners-container"}>{this.renderPartners()}</div>
        </section>

        <section id={"section-five"} className="container section-five">
          <div className="section-header">
            <h1>{strings.home.s11}</h1>
          </div>
          <div className={"jobs-container"}>{this.renderJobs()}</div>
        </section>

        <section id={"section-six"} className="container section-six">
          <div className="section-header">
            <h1>{strings.home.s12}</h1>
          </div>
          <div className={"contact-us-container"}>
            {this.renderContactUsForm()}
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state: any): any => {
  return state;
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    reset: () => {
      dispatch(reset("contactUs"));
    }
  };
};

type ReduxType = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps>;

export default reduxForm({
  form: "contactUs",
  validate: modules.validate
})(
  connect<typeof mapStateToProps, typeof mapDispatchToProps>(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(Home))
);
