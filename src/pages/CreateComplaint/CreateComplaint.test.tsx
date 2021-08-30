import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CreateComplaint from "./CreateComplaint";

describe("CreateComplaint component", () => {
  test("Check CreateComplaint component's elements", () => {
    
    render(
      <MemoryRouter>
        <CreateComplaint />
      </MemoryRouter>
    )
    expect(screen.getByText("Ana Sayfa")).toBeInTheDocument();
  });
});
