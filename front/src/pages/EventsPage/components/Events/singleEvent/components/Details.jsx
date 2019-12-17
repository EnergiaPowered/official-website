import React from "react";

const Details = ({ details }) => {
  return (
    <div className="details">
      <h1 className="mb-4">Details</h1>
      <p className="paragraph">{details}</p>
    </div>
  );
};

export default Details;
