import React from "react";
import { render, screen } from "@testing-library/react";
import SideBar from "./SideBar";

describe("SideBar component", () => {
  test("Check SideBar component's elements", () => {
    render(<SideBar />)
    expect(screen.getByText("Şikayet Oluştur")).toBeInTheDocument();
    expect(screen.getByTestId("image")).toBeInTheDocument();
  });
});
