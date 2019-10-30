import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

import logo from "../logo.png";

export default () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  return (
    <Router>
      <nav
        className={`navbar fixed-top navbar-expand-lg ${
          scroll ? "bg-dark" : ""
        }`}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              className="logo-img"
              width="70px"
              src={logo}
              alt="Energia's Logo"
              title="logo of the team"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              {/* add other links here */}
            </ul>
          </div>
        </div>
      </nav>
    </Router>
  );
};
