import React from "react";
import Event from "./Event";
const Events = ({ events }) => {
  return (
    <div className="container">
      <div className="row AllEvents">
        {events.map(e => (
          <div className="col-lg-6 " key={e._id}>
            <Event event={e} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
