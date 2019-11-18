import React from "react";
import "./index.css";
const Events = ({ event }) => {
  return (
    <div className="card  mb-3 card-container">
      <div className="row no-gutters">
        <div className="col-md-6 cover-img">
          <img
            src={event.image.url}
            className="card-img"
            alt={event.image.alt}
          />
        </div>

        <div className="col-md-6">
          <div className="card-body McardBody">
            {event.body.map(e => (
              <p className="bodyRow" key={e.title}>
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
            <button
              className={
                "btn btn-light Event-btn " +
                (event.body[event.body.length - 1].value === 0
                  ? "disabled"
                  : "")
              }
            >
              Event Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
