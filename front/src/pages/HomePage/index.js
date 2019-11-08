import React from "react";

import { Helmet } from "react-helmet";

import "./index.css";
import Header from "./components/Header";
import SupVis from "./components/Supervisor";
import Partners from "./components/Partners";
import Footer from "../../components/Footer";
import Committees from "./components/Committees"

export default () => {
  return (
    <div className="page-component" id="HomePage">
      <Helmet>
        <title>Energia Powered | Cairo University</title>
      </Helmet>
      <Header />
      <SupVis />
      <Committees />
      <Partners />
      <Footer />
    </div>
  );
};
