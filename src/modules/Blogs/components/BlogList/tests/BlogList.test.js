import React from "react";
import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import { create } from "react-test-renderer";
import BlogList from "./../BlogList";

afterEach(cleanup);
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<BlogList />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it("matches snapshot", () => {
    const loader = create(<BlogList />).toJSON();
    expect(loader).toMatchSnapshot();
});
