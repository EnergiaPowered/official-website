import React from "react"
import { HiLocationMarker } from 'react-icons/hi';
import { MdDateRange } from 'react-icons/md';
import "./indexComponents.css"

function EventsComponent({ events }) {
    return (
        <div className="container-fluid ">
            {events.map((event, index) => (
                <div key={index} className="container_card row" >

                    <div className="img_card" >
                        {event.imageID ?
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
                                <MdDateRange /> From: {new Date(event.date).toDateString().slice(0, 10)} {new Date(event.date).toTimeString().slice(0, 5)}
                            </h6>
                            <h6>
                                <MdDateRange /> To: {new Date(event.date).toDateString().slice(0, 10)} {new Date(event.date).toTimeString().slice(0, 5)}
                            </h6>
                        </div>
                        <div className="type_event badge badge-pill badge-primary">
                            <h5>{event.status}</h5>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default EventsComponent;
