import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ComplaintContextProvider, { ComplaintContext } from "./ComplaintContext";

describe("login function", () => {
  test("sets isLoggedIn status to true", () => {
    const TestComponent = () => {
      const { addData, changeStep, step, formValues } = React.useContext(ComplaintContext);
      const newValues = {
        firstName: "Mehmet",
        lastName: "Mutlu",
        identityNumber: "12345678910",
        age: 24,
        complaintDetail: "Complaint Detail",
        complaintTitle: "Complaint Title",
        address: "New Address",
        email: "mehmet@mutlu.com",
      };
      return (
        <>
          <div data-testid="step">{step}</div>
          <div data-testid="form-values">{formValues.firstName}</div>
          <button type="button" onClick={() => addData(newValues)}>
            AddData
          </button>
          <button type="button" onClick={() => changeStep("secondStep")}>
            ChangeStep
          </button>
        </>
      );
    };
    const wrapper = render(
      <ComplaintContextProvider>
        <TestComponent />
      </ComplaintContextProvider>
    );

    expect(wrapper.getByTestId('step').textContent).toBe("firstStep");
    expect(wrapper.getByTestId('form-values').textContent).toBe("");

    const addDataButton = screen.getByText('AddData');
    const changeStepButton = screen.getByText('ChangeStep');

    fireEvent.click(addDataButton);
    fireEvent.click(changeStepButton);
    
    expect(wrapper.getByTestId('step').textContent).toBe("secondStep");
    expect(wrapper.getByTestId('form-values').textContent).toBe("Mehmet");
  });
});
