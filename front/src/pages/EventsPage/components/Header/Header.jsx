import React from "react";
import Header from "../../../../shared/Navbar";
import "./index.css";

export default ({ title }) => {
  return (
    <section id="header" className="header-section">
      <Header />
      <header className="container">
        <h1 className="events header-title">{title} </h1>
      </header>
    </section>
  );
};
