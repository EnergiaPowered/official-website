import React from "react";

const CardButton = ({ available }) => {
  return (
    <div className="text-center">
      <button
        className={
          "btn btn-light Event-btn " + (available === 0 ? "disabled" : "")
        }
      >
        Event Form
      </button>
    </div>
  );
};

export default CardButton;
