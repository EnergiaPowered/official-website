import React from "react";
import {Link} from "react-router-dom"
const CardButton = ({ available,event}) => {
  return (
    <div className="text-center">
      <Link
      to={`/events/${event._id}/${event.body[0].value}`}
        className={
          "btn btn-light Event-btn " + (available === 0 ? "disabled" : "")
        }
      >
       {available === 0 ? "Form Closed": "Register now"}
      </Link>
    </div>
  );
};

export default CardButton;
