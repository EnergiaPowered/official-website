import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Navbar from "shared/Navbar";
import Footer from "shared/Footer";

import { getCommittees } from "../../services/committees.services";

import "./style.css";

import bg from "assets/single-comm-header.png";

export default function SingleCommittee(props) {

  const [committee, setCommittee] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    getCommittees().then((res) => setCommittee(res.data.find(
      item => item.title.toLowerCase() === props.match.params.id
    )));
  }, []);

  let style = {
    backgroundImage: `url(${bg})`
  };

  return (
    <>
      { committee ? (
        <>
          <Helmet>
            <title>Energia Powered | {committee.title}</title>
          </Helmet>
          <Navbar />
          <article className="page-component" id="SingleComm" style={style}>
            <header className="header-section">
              <h1 data-testid="comm-title">{committee.title}</h1>
              <div id="comm-icon">
                <FontAwesomeIcon icon={committee.icon_class} />
              </div>
            </header>

            <main>
              <div className="container">
                <section className="bg-section component-font">
                  <h2 className="text-center section-title">Our Vision</h2>
                  <p data-testid="comm-vision">{committee.vision}</p>
                </section>

                <hr />

                <section className="bg-section component-font">
                  <h2 className="section-title text-center">Our Mission</h2>
                  <p data-testid="comm-mission">{committee.mission}</p>
                </section>
              </div>
            </main>

            <div className="border-up">
              <Footer />
            </div>
          </article>
        </>
      ) : null}
    </>
  );
}
