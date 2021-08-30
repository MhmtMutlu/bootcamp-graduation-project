import React from "react";
import { render, screen } from "@testing-library/react";
import ComplaintQueryResult from "./ComplaintQueryResult";

describe("ComplaintQueryResult component", () => {

  test("Check if adminResponse is not empty", () => {
    render(<ComplaintQueryResult adminResponse="Response" id="123123" />)
    expect(screen.getByText("Şikayet Yanıtı")).toBeInTheDocument();
    expect(screen.getByText("123123 Numaralı Şikayetiniz Yanıtlanmıştır!")).toBeInTheDocument();
    expect(screen.getByText("Response")).toBeInTheDocument();
  });

  test("Check if adminResponse is empty", () => {
    render(<ComplaintQueryResult adminResponse="" id="123123" />)
    expect(screen.getByText("123123 Numaralı Şikayetiniz Henüz Yanıtlanmamıştır!")).toBeInTheDocument();
  });
});
