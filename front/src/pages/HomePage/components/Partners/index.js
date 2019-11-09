import React from "react";

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
  return (
    <section id="Partners" className="bg-section dark-bg component-font">
      <div className="container">
        <h2 className="section-title"> partners & sponsors </h2>

        <Carousel responsive={responsive} infinite={true}>
          <article className="partner-carousel-item">
            <section className="partner-logo">
              <img
                src="https://via.placeholder.com/100?text=partner"
                alt="partner-logo"
              />
            </section>

            <p className="partner-name"> EX </p>
          </article>

          <article className="partner-carousel-item">
            <section className="partner-logo">
              <img
                src="https://via.placeholder.com/100?text=partner"
                alt="partner-logo"
              />
            </section>

            <p className="partner-name"> EX </p>
          </article>

          <article className="partner-carousel-item">
            <section className="partner-logo">
              <img
                src="https://via.placeholder.com/100?text=partner"
                alt="partner-logo"
              />
            </section>

            <p className="partner-name"> EX </p>
          </article>

          <article className="partner-carousel-item">
            <section className="partner-logo">
              <img
                src="https://via.placeholder.com/100?text=partner"
                alt="partner-logo"
              />
            </section>

            <p className="partner-name"> EX </p>
          </article>
        </Carousel>

        <Carousel responsive={responsive}>
          <article className="partner-carousel-item">
            <section className="partner-logo">
              <img
                src="https://via.placeholder.com/100?text=partner"
                alt="partner-logo"
              />
            </section>

            <p className="partner-name"> EX </p>
          </article>

          <article className="partner-carousel-item">
            <section className="partner-logo">
              <img
                src="https://via.placeholder.com/100?text=partner"
                alt="partner-logo"
              />
            </section>

            <p className="partner-name"> EX </p>
          </article>

          <article className="partner-carousel-item">
            <section className="partner-logo">
              <img
                src="https://via.placeholder.com/100?text=partner"
                alt="partner-logo"
              />
            </section>

            <p className="partner-name"> EX </p>
          </article>

          <article className="partner-carousel-item">
            <section className="partner-logo">
              <img
                src="https://via.placeholder.com/100?text=partner"
                alt="partner-logo"
              />
            </section>

            <p className="partner-name"> EX </p>
          </article>
        </Carousel>
      </div>
    </section>
  );
};
