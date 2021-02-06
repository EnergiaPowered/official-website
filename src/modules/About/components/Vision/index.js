import React from "react";

export default ({ vision }) => {
  return (
    <section className="bg-section about-vision component-font">
      <h2 className="section-title">Our Vision</h2>
      <p data-testid="vision-text"> {vision} </p>
    </section>
  );
};
