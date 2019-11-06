import React, { useState, useEffect } from "react";
import data from "../../../static_data/committees.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import "./style.css";

library.add(faFire);

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

export default function Committees() {
    return (
        <Carousel responsive={responsive} infinite={true} className="lg">
            {data.map((el, idx) => (
                <div className="committee-carousel-item" key={idx}>
                    <div className="icon">
                        <FontAwesomeIcon icon="fire" size="4x" />
                    </div>
                    <p class="text-lg-center">{el.title}</p>
                </div>
            ))}
        </Carousel>
    );
}
