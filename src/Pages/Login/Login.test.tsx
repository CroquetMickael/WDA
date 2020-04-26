import React from "react";
import { render } from "@testing-library/react";
import { LoginContainer } from "./LoginContainer";

test("should be loading when click", () => {
  const { getByText } = render(<LoginContainer />);
  const loginElement = getByText("Login");
  loginElement.click();
  expect(loginElement).toBeInTheDocument();
});
