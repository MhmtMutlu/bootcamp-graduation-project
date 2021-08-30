import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Result from "./Result";

const effect = jest.spyOn(React, 'useEffect');

describe("AdditionalInfos component", () => {
  test("Check AdditionalInfos component's elements", () => {
    render(
      <Router>
        <Result />
      </Router>
    )
    expect(screen.getByText("Şikayet Numaranız:")).toBeInTheDocument();
    expect(screen.getByText("Email:")).toBeInTheDocument();
    expect(screen.getByText("Şikayetin Konusu:")).toBeInTheDocument();
    expect(screen.getByText("Şikayetin Detayı:")).toBeInTheDocument();
    expect(screen.getByTestId("title")).toBeInTheDocument();
    expect(effect).toBeCalledTimes(0);
  });
});
