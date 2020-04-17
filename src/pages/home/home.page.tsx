import React from "react";

import "./home.scss";
import { strings } from "../../res";

export default function Home() {
  return (
    <div>
      <section className={"section-one"}>
        <h1>{strings.home.s1}</h1>
        <h6>{strings.home.s2}</h6>
      </section>
      <section className="section-two">
        <div className="section-title">
          <h1>{strings.home.s3}</h1>
        </div>
      </section>
      <section className="section-three"></section>
      <section className="section-four"></section>
    </div>
  );
}
