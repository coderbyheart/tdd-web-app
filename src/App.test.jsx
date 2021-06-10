import * as React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders Hello World!", () => {
  render(<App />);
  const pElement = screen.getByText(/Hello World\!/i);
  expect(pElement).toBeInTheDocument();
});
