import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ComplaintList from "./ComplaintList";

describe("ComplaintList component", () => {
  test("Check ComplaintList component's elements", () => {
    render(
      <Router>
        <ComplaintList />
      </Router>
    )
  });
});
