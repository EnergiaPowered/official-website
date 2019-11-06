import React from "react";

import "./index.css";
import Header from "./components/Header";
import SupVis from "./components/Supervisor";
import Partners from "./components/Partners";
import Footer from "../../components/Footer";

export default () => {
  return (
    <div className="page-component" id="HomePage">
      <Header />
      <SupVis />
      <Partners />
      <Footer />
    </div>
  );
};
