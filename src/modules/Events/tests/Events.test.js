import React from "react";
import ReactDOM from "react-dom";
import Events from "./../Events";
import { cleanup } from "@testing-library/react";
import { create } from "react-test-renderer";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

afterEach(cleanup);
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Events />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it("matches snapshot", () => {
    const events = create(<Events />).toJSON();
    expect(events).toMatchSnapshot();
});
Enzyme.configure({ adapter: new Adapter() });

it("check default title", () => {
    const events = mount(<Events />);
    expect(events.find("title").text()).toEqual("Energia Powered | Events");
    expect(events.toJSON).toMatchSnapshot();
});

it("check default header", () => {
    const events = mount(<Events />);
    expect(events.find("h1").text()).toEqual("Events");
    expect(events.toJSON).toMatchSnapshot();
});
