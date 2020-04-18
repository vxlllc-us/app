import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./home.scss";
import "../../index.scss";
import { strings } from "../../res";
import { config, IService } from "../../lib";

const { services } = config;

export default class Home extends React.Component {
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

  render() {
    return (
      <div>
        <section className={"section-one"}>
          <h1>{strings.home.s1}</h1>
          <h6>{strings.home.s2}</h6>
        </section>
        <section className="section-two">
          <div className="section-title">
            <h1>{strings.home.s3}</h1>
            <div className={"services-container"}>{this.renderServices()}</div>
          </div>
        </section>
        <section className="section-three"></section>
        <section className="section-four"></section>
      </div>
    );
  }
}
