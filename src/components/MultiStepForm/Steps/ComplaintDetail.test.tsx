import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ComplaintDetail from "./ComplaintDetail";

const effect = jest.spyOn(React, 'useEffect');

describe("ComplaintDetail component", () => {
  test("Check ComplaintDetail component's elements", () => {
    render(
      <Router>
        <ComplaintDetail />
      </Router>
    )
    expect(screen.getByText("Şikayet Detayı")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Ürün veya hizmetle ilgili nasıl bir sorun yaşadınız?")).toBeInTheDocument();
    expect(screen.getByText("Geri Dön")).toBeInTheDocument();
    expect(screen.getByText("Devam Et")).toBeInTheDocument();
    expect(effect).toBeCalledTimes(2);
  });
});
