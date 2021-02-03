import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Layout from '../../shared/Layout/index';
import { IoIosArrowDown } from 'react-icons/io';
import Competition from "./components/Competition";
import Marathon from "./components/Marathon";
import OnDayEvent from "./components/OnDayEvent";
import Session from "./components/Session";
import "./index.css";

function Events() {
    const [switchPage] = useState([
        <Marathon />,
        <Competition />,
        <OnDayEvent />,
        <Session />
    ]);
    const [handelPage, setHandelPage] = useState(<Session />);

    return (
        <div className="page-component " >
            <Helmet>
                <title>Energia Powered | Events</title>
            </Helmet>
            <Layout>
                <div className="page_container  ">
                    <h1 id="dropE">Events</h1>
                    <div className="dropdown">
                        <button className="dropbtn"><h1> <IoIosArrowDown /></h1></button>
                        <div className="dropdown_content dropdown-menu-right" style={{ "height": "fit-content", "overflow": "hidden" }}>
                            <div className="value_dropDown" onClick={() => setHandelPage(switchPage[3])}>Sessions</div>
                            <div className="value_dropDown" onClick={() => setHandelPage(switchPage[2])}>OnDayEvents</div>
                            <div className="value_dropDown" onClick={() => setHandelPage(switchPage[0])}>Marathons</div>
                            <div className="value_dropDown" onClick={() => setHandelPage(switchPage[1])}>Competitions</div>
                        </div>
                    </div>
                </div>
                <div> {handelPage} </div>
            </Layout>
        </div>
    )
}

export default Events;
