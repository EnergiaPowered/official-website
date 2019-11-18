import React from "react";

const CardImage = ({ image }) => {
  return (
    <div className="col-md-6 cover-img">
      <img src={image.url} className="card-img" alt={image.alt} />
    </div>
  );
};

export default CardImage;
