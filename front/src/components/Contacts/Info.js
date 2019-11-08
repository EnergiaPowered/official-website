import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.css";
import supervisor from "../../assests/supervisor.jpg";

export default function Info(props) {
    return (
        <article className="full-screen" id="contact-info">
            <section id="info">
                <div>
                    <h3>
                        <FontAwesomeIcon icon="map-marker" /> ADDRESS
                    </h3>
                    <p>
                        {props.address ||
                            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, voluptate?"}
                    </p>
                </div>
                <div>
                    <h3>
                        <FontAwesomeIcon icon="mail-bulk" /> EMAIL
                    </h3>
                    <p>{props.email || "example@domain.com"}</p>
                </div>
                <div>
                    <h3>
                        <FontAwesomeIcon icon="phone" /> PHONE
                    </h3>
                    <p>{props.phone || "+201223456789"}</p>
                </div>
            </section>
            <section id="map">
                <h2>OUR LOCATION</h2>
                <img src={ props.image || supervisor} />
            </section>
        </article>
    );
}
