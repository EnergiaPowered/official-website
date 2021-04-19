import React from "react";
import ReactDOM from "react-dom";
import Loader from "./../../Loader/index";
import { cleanup } from "@testing-library/react";
import { create } from "react-test-renderer";

// test for loader
afterEach(cleanup);
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Loader />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it("matches snapshot", () => {
    const loader = create(<Loader />).toJSON();
    expect(loader).toMatchSnapshot();
});
