import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import PersonalInfos from "./PersonalInfos";

const effect = jest.spyOn(React, 'useEffect');

describe("PersonalInfos component", () => {
  test("Check PersonalInfos component's elements", () => {
    render(
      <Router>
        <PersonalInfos />
      </Router>
    )
    expect(screen.getByText("Adınız")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Adınızı giriniz...")).toBeInTheDocument();
    expect(screen.getByText("Soyadınız")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Soyadınızı giriniz...")).toBeInTheDocument();
    expect(screen.getByText("TC Kimlik Numaranız")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("TC Kimlik Numaranızı giriniz...")).toBeInTheDocument();
    expect(screen.getByText("Yaşınız")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Yaşınızı giriniz...")).toBeInTheDocument();
    expect(screen.getByText("Devam Et")).toBeInTheDocument();
    expect(effect).toBeCalledTimes(2);
  });
});
