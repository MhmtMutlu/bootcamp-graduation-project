import React from "react";
import { render, screen } from "@testing-library/react";
import ComplaintDetail from "./ComplaintDetail";

describe("ComplaintDetails Component", () => {

  test("Check if adminResponse is not empty", () => {
    render(<ComplaintDetail adminResponse="Response" id="123123" />)
    expect(screen.getByText("Şikayet Yanıtı")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Response")).toBeInTheDocument();
  });

  test("Check if adminResponse is empty", () => {
    render(<ComplaintDetail adminResponse="" id="123123" />)
    expect(screen.getByPlaceholderText("Şikayet yanıtınızı yazınız...")).toBeInTheDocument();
    expect(screen.getByText("Gönder")).toBeInTheDocument();
  });
});
