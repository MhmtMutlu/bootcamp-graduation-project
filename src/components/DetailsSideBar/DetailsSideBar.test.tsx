import React from "react";
import { render, screen } from "@testing-library/react";
import DetailsSideBar from "./DetailsSideBar";

describe("Complaints component", () => {

  test("Check if adminResponse is not empty", () => {
    render(
      <DetailsSideBar 
        firstName="Mehmet"
        lastName="Mutlu"
        age={24}
        address="Address"
        email="mehmet@mutlu.com"
        identityNumber="123123123123"
        complaintDetail="Complaint Detail"
        complaintTitle="Complaint Title"
        adminResponse="Response" 
        id="123123" 
      />
    )
    expect(screen.getByText("Kişisel Bilgiler")).toBeInTheDocument();
    expect(screen.getByText("Mehmet Mutlu")).toBeInTheDocument();
    expect(screen.getByText("123123123123")).toBeInTheDocument();
    expect(screen.getByText("mehmet@mutlu.com")).toBeInTheDocument();
    expect(screen.getByText("24")).toBeInTheDocument();
    expect(screen.getByText("Address")).toBeInTheDocument();
    expect(screen.getByText("Şikayet Bilgileri")).toBeInTheDocument();
    expect(screen.getByText("Complaint Title")).toBeInTheDocument();
    expect(screen.getByText("Complaint Detail")).toBeInTheDocument();
  });
});
