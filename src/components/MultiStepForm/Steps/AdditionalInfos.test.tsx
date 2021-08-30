import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdditionalInfos from "./AdditionalInfos";

const effect = jest.spyOn(React, 'useEffect');

describe("AdditionalInfos component", () => {
  test("Check AdditionalInfos component's elements", () => {
    render(
      <Router>
        <AdditionalInfos />
      </Router>
    )
    expect(screen.getByText("Adresiniz")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Adresini giriniz...")).toBeInTheDocument();
    expect(screen.getByText("Emailiniz")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Emailinizi giriniz...")).toBeInTheDocument();
    expect(screen.getByText("Geri Dön")).toBeInTheDocument();
    expect(screen.getByText("Devam Et")).toBeInTheDocument();
    expect(effect).toBeCalledTimes(2);
  });
});
