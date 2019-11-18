import React from "react";
import "./index.css";
const Events = ({ event }) => {
  return (
    <div className="card mb-3 card-container">
      <div className="row no-gutters">
        {/***************************************************************************** */}
        <div className="col-md-4">
          <img
            src={event.image.url}
            className="card-img"
            alt={event.image.alt}
          />
        </div>
        <div className="col-md-6">
          {/*Body _______________________________________________________________________________________________________________________ */}
          {/* _______________________________________________________________________________________________________________________ */}

          <div className="card-body">
            {event.body.map(e => (
              <p key={e.title}>
                <span className="EventTitle">{e.title} : </span>
                <span className="EventValue">
                  {e.title === "Status"
                    ? e.value === 1
                      ? "happening now"
                      : "Not Yet"
                    : e.value}
                </span>
              </p>
            ))}
          </div>

          <div className="text-center">
            <button className="btn btn-light Event-btn">Event Form</button>
          </div>
          {/* End Body_______________________________________________________________________________________________________________________ */}
          {/* _______________________________________________________________________________________________________________________ */}
        </div>
        {/***************************************************************************** */}
      </div>
    </div>
  );
};

export default Events;
