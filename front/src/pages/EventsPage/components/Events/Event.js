import React from "react";
import EventBody from "./CardBody.js";
import EventButton from "./CardButton.js";
import EventImage from "./CardImage.js";
import "./index.css";

const Events = ({ event }) => {
  return (
    <div className="card   card-container EventsCard">
      <div className="row no-gutters">
        <EventImage image={event.image} />
        <div className="col-md-6">
          <EventBody event={event} />
          <EventButton available={event.body[event.body.length - 1].value} />
        </div>
      </div>
    </div>
  );
};

export default Events;
