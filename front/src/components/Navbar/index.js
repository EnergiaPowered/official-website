import React, { useState, useEffect } from "react";

import { Link, NavLink } from "react-router-dom";

import logo from "../../assests/logo.png";

import routes from "../../globals/routes";

import "./style.css";

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
    <nav
      data-testid="navbar"
      className={`navbar fixed-top navbar-expand-lg ${scroll ? "bg-dark" : ""}`}
    >
      <div className="container">
        <Link className={`navbar-brand ${scroll ? "img-scrolled" : ""}`} to="/">
          <img
            className="logo-img"
            // width="70px"
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
            {routes &&
              routes.map(route => {
                return route.page ? (
                  <li
                    key={route.path}
                    className="nav-item"
                  >
                    <NavLink
                      exact
                      data-testid="navlinks"
                      className="nav-link"
                      to={route.path}
                    >
                      {route.label}
                    </NavLink>
                  </li>
                ) : null;
              })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
