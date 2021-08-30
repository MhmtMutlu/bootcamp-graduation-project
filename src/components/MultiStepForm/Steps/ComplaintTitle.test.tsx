import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ComplaintTitle from "./ComplaintTitle";

const effect = jest.spyOn(React, 'useEffect');

describe("ComplaintTitle component", () => {
  test("Check ComplaintTitle component's elements", () => {
    render(
      <Router>
        <ComplaintTitle />
      </Router>
    )
    expect(screen.getByText("Şikayetin Konusu")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Şikayetinizin konusu nedir?")).toBeInTheDocument();
    expect(screen.getByText("Geri Dön")).toBeInTheDocument();
    expect(screen.getByText("Devam Et")).toBeInTheDocument();
    expect(effect).toBeCalledTimes(2);
  });
});
