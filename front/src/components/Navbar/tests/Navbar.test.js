import React from "react";
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import Navbar from "./../index";

import { BrowserRouter as Router } from "react-router-dom";

import { MemoryRouter } from "react-router-dom";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// test for crashing
it("renders without crashing", () => {
  ReactDOM.render(
    <MemoryRouter initialEntries={["/"]}>
      <Navbar />
    </MemoryRouter>,
    container
  );
});

// test if the navbar have the "Scrolled" class on scroll
it("navbar don't have 'bg-dark' when not scrolled", () => {
  let { getByTestId } = render(
    <Router>
      <Navbar />
    </Router>
  );

  expect(getByTestId("navbar")).not.toHaveClass("bg-dark");
});

// ensure that links with parameters not to be shown in the navbar
it("links with parameters not to be shown in the navbar", () => {
  let { getAllByTestId } = render(
    <Router>
      <Navbar />
    </Router>
  );

  getAllByTestId("navlinks").map(link => {
    expect(link).toHaveTextContent(/(Home|About|History|Contact|Blog)/i)
  })
});
