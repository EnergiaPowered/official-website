import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Layout from '../../shared/Layout/index';
import { IoIosArrowDown } from 'react-icons/io';
import EventsComponent from "./components/EventsComponent";
import { getEvents } from "./services/events.services";
import "./index.css";

function Events() {
    const [switchPage] = useState([
        "Session",
        "OnDayEvent",
        "Marathon",
        "Competition"
    ]);
    const [handelPage, setHandelPage] = useState(null);

    useEffect(() => viewEvents("Session"), []);

    const viewEvents = category => {
        getEvents().then((res) => {
            let events = res.data
                .filter(event => event.category === category)
                .sort((a, b) => {
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
                });
            setHandelPage(<EventsComponent events={events} category={category} />);
        });
    }

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
                            <div className="value_dropDown" onClick={() => viewEvents(switchPage[0])}>Sessions</div>
                            <div className="value_dropDown" onClick={() => viewEvents(switchPage[1])}>OnDayEvents</div>
                            <div className="value_dropDown" onClick={() => viewEvents(switchPage[2])}>Marathons</div>
                            <div className="value_dropDown" onClick={() => viewEvents(switchPage[3])}>Competitions</div>
                        </div>
                    </div>
                </div>

                <div> {handelPage} </div>
            </Layout>
        </div>
    )
}

export default Events;
