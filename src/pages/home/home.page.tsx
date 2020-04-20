import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./home.scss";
import "../../index.scss";
import { strings } from "../../res";
import { config, IService, IPartner, ICustomer } from "../../lib";

const { services, customers, partners } = config;
const base: string = "../../res/assets/images/logos/";

export default class Home extends React.Component {
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

  render() {
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
        </section>
      </div>
    );
  }
}
