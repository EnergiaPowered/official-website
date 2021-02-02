import React from "react"
import "./indexComponents.css"
import { HiLocationMarker } from 'react-icons/hi';
import { MdDateRange } from 'react-icons/md';

function OnDayEvent() {
    return (
        <div className="container-fluid ">
            <h2 className="titleE">OnDayEvents</h2>

            <div className="container_card row" >
                <div className="img_card " >
                    <img alt="event" src="https://via.placeholder.com/150/006400?text=user-img" className="rounded-circle" />
                </div>

                <div className="details_card">
                    <div className="title_event"    > <h4>BE CREATIVE</h4></div>
                    <div className="location_event" > <h6> <HiLocationMarker /> GREEK CAMPUS</h6></div>
                    <div className="date_time_event"> <h6> <MdDateRange />12/12</h6></div>
                    <div className="type_event badge   badge-pill badge-primary"     > <h5>ClOSED</h5></div>
                </div>
            </div>

            <div className="container_card row ">
                <div className="img_card">
                    <img alt="event" src="https://via.placeholder.com/150/FFFF00?text=user-img" className="rounded-circle" />
                </div>
                <div className="details_card">
                    <div className="title_event"    > <h4>BE CREATIVE</h4></div>
                    <div className="location_event" > <h6> <HiLocationMarker /> GREEK CAMPUS</h6></div>
                    <div className="date_time_event"> <h6> <MdDateRange />12/12</h6></div>
                    <div className="type_event badge   badge-pill badge-primary"     > <h5>OPEN</h5></div>
                </div>
            </div>

            <div className="container_card row ">
                <div className="img_card">
                    <img alt="event" src="https://via.placeholder.com/150/00FA9A?text=user-img" className="rounded-circle" />
                </div>
                <div className="details_card">
                    <div className="title_event"    > <h4>BE CREATIVE</h4></div>
                    <div className="location_event" > <h6> <HiLocationMarker /> GREEK CAMPUS</h6></div>
                    <div className="date_time_event"> <h6> <MdDateRange />12/12</h6></div>
                    <div className="type_event badge   badge-pill badge-primary"     > <h5>UPCOMING</h5></div>
                </div>
            </div>
        </div>
    )
}

export default OnDayEvent;