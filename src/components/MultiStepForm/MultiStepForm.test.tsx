import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter  } from "react-router-dom";
import MultiStepForm from "./MultiStepForm";

describe("MultiStepForm testing", () => {

  test('Render MultiStepForm', () => {
    render(
      <MemoryRouter>
        <MultiStepForm />
      </MemoryRouter>
    )
  })
})

