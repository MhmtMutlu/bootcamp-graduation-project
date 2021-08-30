import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Complaints from "./Complaints";

describe("Complaints component", () => {

  test("Check if adminResponse is not empty", () => {
    render(
      <Router>
        <Complaints 
          firstName="Mehmet"
          lastName="Mutlu"
          complaintDetail="Complaint Detail"
          complaintTitle="Complaint Title"
          adminResponse="Response" 
          id="123123" 
        />
      </Router>
    )
    expect(screen.getByText("123123")).toBeInTheDocument();
    expect(screen.getByText("Complaint Title")).toBeInTheDocument();
    expect(screen.getByText("Mehmet Mutlu")).toBeInTheDocument();
    expect(screen.getByText("Complaint Detail")).toBeInTheDocument();
    expect(screen.getByText("Detay")).toBeInTheDocument();
  });

  test("Check if adminResponse is empty", () => {
    render(
      <Router>
        <Complaints 
          firstName="Mehmet"
          lastName="Mutlu"
          complaintDetail="Complaint Detail"
          complaintTitle="Complaint Title"
          adminResponse="" 
          id="123123" 
        />
      </Router>
    )
    expect(screen.getByText("123123")).toBeInTheDocument();
    expect(screen.getByText("Complaint Title")).toBeInTheDocument();
    expect(screen.getByText("Mehmet Mutlu")).toBeInTheDocument();
    expect(screen.getByText("Complaint Detail")).toBeInTheDocument();
    expect(screen.getByText("Cevapla")).toBeInTheDocument();
  });
});
