import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ComplaintDetails from "./ComplaintDetails";

const effect = jest.spyOn(React, 'useEffect');

describe("ComplaintDetails component", () => {
  test("Check ComplaintDetails component's elements", () => {
    render(
      <Router>
        <ComplaintDetails />
      </Router>
    )
    expect(effect).toBeCalledTimes(0);
  });
});
