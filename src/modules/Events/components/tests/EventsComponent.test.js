import React from "react";
import ReactDOM from "react-dom";
import EventsComponent from "./../EventsComponent";
import { cleanup } from "@testing-library/react";
import { create } from "react-test-renderer";

afterEach(cleanup);
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<EventsComponent events={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it("matches snapshot", () => {
    const eventsComponent = create(<EventsComponent events={[]} />).toJSON();
    expect(eventsComponent).toMatchSnapshot();
});
