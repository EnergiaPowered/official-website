import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import upRit from "../BestMember/img/upRit.png";
import upLft from "../BestMember/img/upLft.png";
import logoUser from "../BestMember/img/logoUser.png";
import dwRit from "../BestMember/img/dwRit.png";
import dwLft from "../BestMember/img/dwLft.png";
import "./BMstyle.css";

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

  const [imgMember] = useState([
    { imgUrl: "https://via.placeholder.com/150?text=user-img", name: "name", Description: "web developer" },
    { imgUrl: "https://via.placeholder.com/150?text=user-img", name: "name", Description: "web developer" },
    { imgUrl: "https://via.placeholder.com/150?text=user-img", name: "name", Description: "web developer" },
    { imgUrl: "https://via.placeholder.com/150?text=user-img", name: "name", Description: "web developer" },
    { imgUrl: "https://via.placeholder.com/150?text=user-img", name: "name", Description: "web developer" },
    { imgUrl: "https://via.placeholder.com/150?text=user-img", name: "name", Description: "web developer" }
  ]);

  return (
    <section id="bestMember" className="bg-section dark-bg component-font">

      <div className="container">

        <h3 className="section-title">BEST MEMBERS OF THE MONTH</h3>

        <img alt="upper left" className="img-fluid" id="upPng" src={upLft} />
        <img alt="members" id="logoUser" src={logoUser} />
        <img alt="upper right" className="img-fluid" id="upPng" src={upRit} />

        <Carousel responsive={responsive} infinite={true}>

          {imgMember.map((imgMem, idx) => {
            return (
              <article className="member-carousel-item" key={idx}>
                <section className="member-logo">
                  <img src={imgMem.imgUrl} alt="imgMem-logo" />
                </section>

                <h4 className="member-name"> {imgMem.name} </h4>
                <h6 className="member-name"> {imgMem.Description} </h6>

              </article>
            );
          })}
        </Carousel>

        <div className="row">
          <img alt="lower left" className="img-fluid" id="dwPng" src={dwLft} />
          <img alt="lower right" className="img-fluid" id="dwPng" src={dwRit} />
        </div>

      </div>
    </section>

  );
}


