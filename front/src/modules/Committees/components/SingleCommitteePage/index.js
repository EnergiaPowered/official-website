import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Navbar from "shared/Navbar";
import Footer from "shared/Footer";

import comm_simp from "static_data/committees.json";

import "./style.css";

import bg from "assets/single-comm-header.png";

export default function SingleCommittee(props) {
  const data = comm_simp.find(
    item => item.title.toLowerCase() === props.match.params.id
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  let style = {
    backgroundImage: `url(${bg})`
  };

  return (
    <>
      <Helmet>
        <title>Energia Powered | {data.title}</title>
      </Helmet>
      <Navbar />
      <article className="page-component" id="SingleComm" style={style}>
        <header className="header-section">
          <h1 data-testid="comm-title">{data.title}</h1>
          <div id="comm-icon">
            <FontAwesomeIcon icon={data.icon_class} />
          </div>
        </header>

        <main>
          <div className="container">
            <section className="bg-section component-font">
              <h2 className="text-center section-title">Our Vision</h2>
              <p data-testid="comm-vision">{data.vision}</p>
            </section>

            <hr />

            <section className="bg-section component-font">
              <h2 className="section-title text-center">Our Mission</h2>
              <p data-testid="comm-mission">{data.mission}</p>
            </section>
          </div>
        </main>

        <div className="border-up">
          <Footer />
        </div>
      </article>
    </>
  );
}
