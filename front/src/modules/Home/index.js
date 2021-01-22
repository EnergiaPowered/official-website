import React, { useEffect } from "react";

import { Helmet } from "react-helmet";
import BestMember from "./components/BestMember/bestMember";

import Supervisor from "./components/Supervisor";
import Partners from "./components/Partners";
import Header from "./components/Header";
import Committees from "modules/Committees/components/section";
// import Events from "./components/Events";

import Layout from "shared/Layout";

import "./style.css";

import bg from "assets/Home-header.png";

export default () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let style = {
    backgroundImage: `url(${bg})`
  };

  return (
    <div className="page-component" id="HomePage" style={style}>
      <Helmet>
        <title>Energia Powered | Cairo University</title>
      </Helmet>

      <Layout>
        <Header />
        {/* <Events /> */}
        <Supervisor />
        <Committees />
        <Partners />
        <BestMember/>
      </Layout>
      
    </div>
  );
};
