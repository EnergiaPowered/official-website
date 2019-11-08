import React, { useState } from "react";

// css
import "./Header.css";

export default () => {
  let stateObj = {
    slogan: "The better is yet to come"
  };
  const [state] = useState(stateObj);
  return (
    <section id="header" className="header-section">
      <header className="container">
        <h1 className="header-title"> Energia Powered </h1>

        <p>
          <q className="header-slogan">{state.slogan}</q>
        </p>
      </header>
    </section>
  );
};
