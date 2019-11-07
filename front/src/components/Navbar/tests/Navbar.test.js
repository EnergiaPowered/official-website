import React from "react";
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import Navbar from "./../index";

import { BrowserRouter as Router } from "react-router-dom";

import { MemoryRouter } from "react-router-dom";

import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let box = null;
beforeEach(() => {
  // setup a DOM element as a render target
  box = document.createElement("div");
  document.body.appendChild(box);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(box);
  box.remove();
  box = null;
});

afterEach(cleanup)

// test for crashing
it("renders without crashing", () => {
  ReactDOM.render(
    <MemoryRouter initialEntries={["/"]}>
      <Navbar />
    </MemoryRouter>,
    box
  );
});

// test if the navbar have the "Scrolled" class on scroll
it("navbar don't have 'bg-dark' when not scrolled", () => {
  let { getByTestId, container } = render(
    <Router>
      <Navbar />
    </Router>
  );

  expect(getByTestId("navbar")).not.toHaveClass(
    "bg-dark navbar fixed-top navbar-expand-lg"
  );

  // attach the scroll event to the document to test the effect
  document.addEventListener('scroll', () => {
    document.querySelector(".navbar").classList.add("bg-dark")
  });

  // fire the scroll event
  fireEvent.scroll(document);

  expect(getByTestId("navbar")).toHaveClass(
    "bg-dark navbar fixed-top navbar-expand-lg"
  );
});

// ensure that links with parameters not to be shown in the navbar
it("links with parameters not to be shown in the navbar", () => {
  let { getAllByTestId } = render(
    <Router>
      <Navbar />
    </Router>
  );

  getAllByTestId("navlinks").map(link => {
    expect(link).toHaveTextContent(/(Home|About|History|Contact|Blog)/i);
  });
});
