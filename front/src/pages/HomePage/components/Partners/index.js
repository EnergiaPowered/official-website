import React, { useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./Partners.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default () => {
  const [partners] = useState([
    { imgUrl: "https://via.placeholder.com/100?text=partner", name: "EX" },
    { imgUrl: "https://via.placeholder.com/100?text=partner", name: "EX" },
    { imgUrl: "https://via.placeholder.com/100?text=partner", name: "EX" },
    { imgUrl: "https://via.placeholder.com/100?text=partner", name: "EX" },
    { imgUrl: "https://via.placeholder.com/100?text=partner", name: "EX" },
    { imgUrl: "https://via.placeholder.com/100?text=partner", name: "EX" }
  ]);

  const [sponsors] = useState([
    { imgUrl: "https://via.placeholder.com/100?text=partner", name: "EX" },
    { imgUrl: "https://via.placeholder.com/100?text=partner", name: "EX" },
    { imgUrl: "https://via.placeholder.com/100?text=partner", name: "EX" },
    { imgUrl: "https://via.placeholder.com/100?text=partner", name: "EX" },
    { imgUrl: "https://via.placeholder.com/100?text=partner", name: "EX" },
    { imgUrl: "https://via.placeholder.com/100?text=partner", name: "EX" }
  ]);

  return (
    <section id="Partners" className="bg-section dark-bg component-font">
      <div className="container">
        <h2 className="section-title"> partners & sponsors </h2>

        <Carousel responsive={responsive} infinite={true}>
          {partners.map((partner, idx) => {
            return (
              <article className="partner-carousel-item" key={idx}>
                <section className="partner-logo">
                  <img
                    src={partner.imgUrl}
                    alt="partner-logo"
                  />
                </section>

                <p className="partner-name"> {partner.name} </p>
              </article>
            );
          })}
        </Carousel>

        <Carousel responsive={responsive} infinite={true}>
        {sponsors.map((sponsor, idx) => {
            return (
              <article className="partner-carousel-item" key={idx}>
                <section className="partner-logo">
                  <img
                    src={sponsor.imgUrl}
                    alt="partner-logo"
                  />
                </section>

                <p className="partner-name"> {sponsor.name} </p>
              </article>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};
