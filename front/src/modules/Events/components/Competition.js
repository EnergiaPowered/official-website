import React from "react"
import "./indexComponents.css"
import { HiLocationMarker } from 'react-icons/hi';
import { MdDateRange } from 'react-icons/md';

function Competition() {
    return (
        <div className="container-fluid ">
            <h2 className="titleE">Competitions</h2>

            <div className="container_card row" >
                <div className="img_card " >
                    <img alt="event" src="https://via.placeholder.com/150/08C94E?text=user-img" className="rounded-circle" />
                </div>

                <div className="details_card">
                    <div className="title_event"    >
                        <h4>BE CREATIVE</h4>
                    </div>
                    <div className="location_event" >
                        <h6>
                            <HiLocationMarker />
                            GREEK CAMPUS</h6>
                    </div>
                    <div className="date_time_event"> <h6>
                        <MdDateRange />
                        4/1</h6></div>
                    <div className="type_event badge   badge-pill badge-primary"     > <h5>ClOSED</h5></div>
                </div>
            </div>

            <div className="container_card row ">
                <div className="img_card">
                    <img alt="event" src="https://via.placeholder.com/150/FF7F50?text=user-img" className="rounded-circle" />
                </div>
                <div className="details_card">
                    <div className="title_event"    > <h4>BE CREATIVE</h4></div>
                    <div className="location_event" > <h6>
                        <HiLocationMarker />
                          GREEK CAMPUS
                         </h6></div>
                    <div className="date_time_event"> <h6>
                        <MdDateRange />
                        12/12</h6></div>
                    <div className="type_event badge   badge-pill badge-primary"     > <h5>OPEN</h5></div>
                </div>
            </div>

            <div className="container_card row ">
                <div className="img_card">
                    <img alt="event" src="https://via.placeholder.com/150/FFD700?text=user-img" className="rounded-circle" />
                </div>
                <div className="details_card">
                    <div className="title_event"    > <h4>BE CREATIVE</h4></div>
                    <div className="location_event" > <h6>
                        <HiLocationMarker />
                         GREEK CAMPUS</h6></div>
                    <div className="date_time_event"> <h6>
                        <MdDateRange />
                         5/5</h6></div>
                    <div className="type_event badge   badge-pill badge-primary"     > <h5>UPCOMING</h5></div>
                </div>
            </div>
        </div>
    )
}

export default Competition;