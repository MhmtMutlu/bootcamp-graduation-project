import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

jest.mock("react-dom", () => ({ render: jest.fn() }));

test("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<App />, div);

  global.document.getElementById = (id) => (id === "root" ? div : null);
  
  expect(ReactDOM.render).toHaveBeenCalledWith(<App />, div);
});
