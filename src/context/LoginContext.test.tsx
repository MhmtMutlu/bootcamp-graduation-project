import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import LoginContextProvider, { LoginContext } from "./LoginContext";

describe("login function", () => {
  test("sets isLoggedIn status to true", () => {
    const TestComponent = () => {
      const { logOutAdmin, isLoggedIn, checkIsLogin } = React.useContext(LoginContext);
      const admin = {
        userName: "kodluyoruz",
        password: "bootcamp109"
      }
      return (
        <>
          <div data-testid="value">{isLoggedIn.toString()}</div>
          <button type="button" onClick={() => checkIsLogin(admin)}>
            Login
          </button>
          <button type="button" onClick={logOutAdmin}>
            Logout
          </button>
        </>
      );
    };
    const wrapper = render(
      <LoginContextProvider>
        <TestComponent />
      </LoginContextProvider>
    );

    expect(wrapper.getByTestId('value').textContent).toBe("false");

    const loginButton = screen.getByText('Login');

    fireEvent.click(loginButton);
    
    expect(wrapper.getByTestId('value').textContent).toBe("true");

    const logoutButton = screen.getByText('Logout');

    fireEvent.click(logoutButton);
      
    expect(wrapper.getByTestId('value').textContent).toBe("false");
  });
});
