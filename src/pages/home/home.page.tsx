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
    </div>
  );
}
