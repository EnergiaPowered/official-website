import React from "react";
import { Link } from "react-router-dom";
import data from "../../../../static_data/committees.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "react-multi-carousel";
import "./style.css";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3
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
        <div id="Committees">
            <h2 className="section-title"> Our Committees </h2>
            <Carousel responsive={responsive} infinite={true} className="lg">
                {data.map((el, idx) => (
                    <Link
                        to={`/committee/${idx}`}
                        style={{ color: "white", textDecoration: "none" }}
                        key={idx}
                    >
                        <div className="committee-carousel-item" key={idx}>
                            <div className="icon">
                                <FontAwesomeIcon icon={el.icon_class} />
                            </div>
                            <p className="text-lg-center">{el.title}</p>
                        </div>
                    </Link>
                ))}
            </Carousel>
        </div>
    );
}
