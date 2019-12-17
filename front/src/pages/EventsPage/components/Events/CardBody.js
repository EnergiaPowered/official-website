import React from "react";

const CardBody = ({ event }) => {
  return (
    <div className="card-body McardBody">
      {event.body.map(e => (
        <p className="bodyRow" key={e.title}>
          <span className="EventTitle">{e.title} : </span>
          <span className="EventValue">
            {e.title === "Status"
              ? e.value === 1
                ? "Happenning now"
                : "Closed"
              : e.value}
          </span>
        </p>
      ))}
    </div>
  );
};

export default CardBody;
