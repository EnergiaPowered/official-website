import React from "react";
import {Link} from "react-router-dom"
const CardButton = ({ available,id }) => {
  return (
    <div className="text-center">
      <Link
      to={`/movies/${id}`}
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
