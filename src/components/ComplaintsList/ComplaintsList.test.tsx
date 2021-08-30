import React from "react";
import { render, screen } from "@testing-library/react";
import ComplaintsList from "./ComplaintsList";

const effect = jest.spyOn(React, 'useEffect');

describe("ComplaintsList component", () => {
  test("Check ComplaintsList component's elements", () => {
    render(<ComplaintsList />)
    expect(screen.getByText("Şikayetler")).toBeInTheDocument();
    expect(effect).toBeCalledTimes(1);
  });
});
