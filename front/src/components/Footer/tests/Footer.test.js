import React from "react";
import ReactDOM from "react-dom";
import Footer from "./../index";

// test for crashing
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
