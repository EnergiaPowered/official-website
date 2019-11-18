import React, { useState } from "react";

import "./index.css";

import Footer from "../../components/Footer";
import Header from "./components/Header";

import { Helmet } from "react-helmet";

import Vision from "./components/Vision";
import Mission from "./components/Mission";
import Structure from "./components/Structure";

export default () => {
  let stateObj = {
    vision:
      "We aim to decrease the gap & help in almost all fields to help all next generatoin forming engineer of the future."
  };

  const [state] = useState(stateObj);
  return (
    <div className="page-component" id="About">
      <Helmet>
        <title>About us - Energia Powered | Cairo University</title>
      </Helmet>

      <Header />

      <main>
        <div className="container">
          <Vision vision={state.vision} />
          <hr />

          <Mission />
        </div>

        <Structure />
      </main>

      <Footer />
    </div>
  );
};
