import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../HomePage/Footer";
import comm_simp from "../../static_data/committees.json";
import comm_mis_vis from "../../static_data/comm_extended.json";
import "./index.css";

export default function SingleCommittee(props) {
    const data = comm_simp[props.match.params.id];
    const misVis = comm_mis_vis[props.match.params.id];

    //This is just for scrolling to the top of the page
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <article id="SingleComm">
                <header className="full-screen">
                    <h1>{data.title}</h1>
                    <div id="comm-icon">
                        <FontAwesomeIcon icon={data.icon_class} />
                    </div>
                </header>
                <section className="full-screen">
                    <h2 className="text-center">Our Vision</h2>
                    <p>{misVis.vision}</p>
                    <hr />
                    <h2 className="text-center">Our Mission</h2>
                    <p>{misVis.mission}</p>
                </section>
            </article>
            <div className="border-up">
                <Footer />
            </div>
        </>
    );
}
