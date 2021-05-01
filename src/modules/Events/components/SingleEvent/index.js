import React, { useEffect, useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";
import "./index.css";

const SingleEvent = ({ event }) => {
    const [eventStatus, setEventStatus] = useState("");

    const statusMap = {
        Soon: "warning",
        Closed: "danger",
        Opened: "primary"
    }

    useEffect(() => {
        const currentDate = new Date().toISOString();
        if (event.startDate <= currentDate && event.endDate >= currentDate) setEventStatus("Opened")
        else if (currentDate < event.startDate) setEventStatus("Soon")
        else if (currentDate > event.endDate) setEventStatus("Closed")
    }, [event.endDate, event.startDate])

    return (
        <div className="container_card row" >

            <div className="img_card" >
                {event.eventImageID ?
                    <img alt="event" src={`https://drive.google.com/uc?exort=view&id=${event.eventImageID}`} className="rounded-circle" />
                    :
                    <img alt="event" src={`images/${event.category}.jpg`} className="rounded-circle" />
                }
            </div>

            <div className="details_card">
                <div className="title_event">
                    <h4>{event.name.toUpperCase()}</h4>
                </div>
                <div className="location_event" >
                    <h6>
                        <HiLocationMarker /> {event.eventLocation.toUpperCase()}
                    </h6>
                </div>
                <div className="date_time_event">
                    <h6>
                        <MdDateRange /> From: {new Date(event.startDate).toDateString().slice(0, 10)}, {new Date(event.startDate).toTimeString().slice(0, 5)}
                    </h6>
                    <h6>
                        <MdDateRange /> To: {new Date(event.endDate).toDateString().slice(0, 10)}, {new Date(event.endDate).toTimeString().slice(0, 5)}
                    </h6>
                </div>
                <div className="details_event">
                    <h6>
                        {event.eventDetails ? (
                            <a href={event.eventDetails} target="_blank" rel="noopener noreferrer">
                                More Details
                            </a>
                        ) : (
                            <Link to={`events/${event._id}/${event.name}`}>More Details</Link>
                        )}
                    </h6>
                </div>
                <div className={`type_event badge badge-pill badge-${statusMap[eventStatus]}`}>
                    <h5>{eventStatus}</h5>
                </div>
            </div>
        </div>
    )
}

export default SingleEvent;