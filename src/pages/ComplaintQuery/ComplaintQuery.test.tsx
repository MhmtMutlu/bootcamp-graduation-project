import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ComplaintQuery from "./ComplaintQuery";

const effect = jest.spyOn(React, 'useEffect');

describe("ComplaintQuery component", () => {
  test("Check ComplaintQuery component's elements", () => {
    render(
      <Router>
        <ComplaintQuery />
      </Router>
    )
    expect(effect).toBeCalledTimes(0);
  });
});
