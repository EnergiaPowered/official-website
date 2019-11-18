import React from "react";
import Event from "./Event";
const Events = ({ events }) => {
  return (
    <div className="container row">
      {events.map(e => (
        <div key={e._id}>
          <Event event={e} />
        </div>
      ))}
    </div>
  );
};

export default Events;
