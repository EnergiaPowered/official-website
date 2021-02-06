import React, { useState, useEffect } from "react";

import { Helmet } from "react-helmet";

import "./style.css";

import Vision from "../Vision";
import Mission from "../Mission";
import Structure from "../Structure";
import Header from "../Header";
import Layout from "shared/Layout";

import bg from "assets/About-header.png";

export default function AboutPage() {
  let stateObj = {
    vision:
      "We aim to decrease the gap & help in almost all fields to help all next generatoin forming engineer of the future."
  };

  let style = {
    backgroundImage: `url(${bg})`
  };

  const [state] = useState(stateObj);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="page-component" id="About" style={style}>
      <Helmet>
        <title>Energia Powered | About us</title>
      </Helmet>

      <Layout>
        <Header />
        <main>
          <div className="container">
            <Vision vision={state.vision} />
            <hr />

            <Mission />
          </div>

          <Structure />
        </main>
      </Layout>
    </div>
  );
}
