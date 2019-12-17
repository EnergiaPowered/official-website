import React from "react";
import {Link} from "react-router-dom"
const CardButton = ({ available,event}) => {
  return (
    <div className="text-center">
      <Link
      to={`/events/${event._id}`}
        className={
          "btn btn-light Event-btn " + (available === 0 ? "disabled" : "")
        }
      >
        Details
      </Link>
    </div>
  );
};

export default CardButton;
