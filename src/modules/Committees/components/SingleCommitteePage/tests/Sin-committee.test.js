import React from "react";

import Sin from "../index";

import comm_simp from "../../../static_data/committees.json";

import { cleanup, render } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("renders the component that matches the props", () => {
  const { getByTestId } = render(
    <Sin
      match={{ params: { id: "committee1" }, isExact: true, path: "", url: "" }}
    />
  );

//   get the item matches the params id: "committee1"
  const data = comm_simp.find(
    item => item.title.toLowerCase() === "committee1"
  );

  expect(getByTestId("comm-title")).toHaveTextContent(data.title);
  expect(getByTestId("comm-vision")).toHaveTextContent(data.vision);
  expect(getByTestId("comm-mission")).toHaveTextContent(data.mission);
});
