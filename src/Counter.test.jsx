import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Counter } from "./Counter";

describe("Counter", () => {
  it("should start with 0", () => {
    render(<Counter />);
    const pElement = screen.getByText(/You have clicked 0 times\./i);
    expect(pElement).toBeInTheDocument();
  });
  it("should increase", () => {
    const container = render(<Counter />);
    const button = container.getByText("Click me!");
    fireEvent.click(button);
    const pElement = screen.getByText(/You have clicked 1 time\./i);
    expect(pElement).toBeInTheDocument();
  });
  it("should use plural", () => {
    const container = render(<Counter />);
    const button = container.getByText("Click me!");
    fireEvent.click(button);
    fireEvent.click(button);
    const pElement = screen.getByText(/You have clicked 2 times\./i);
    expect(pElement).toBeInTheDocument();
  });
  it("should allow max 42 clicks", () => {
    const container = render(<Counter />);
    const button = container.getByText("Click me!");
    for (let i = 0; i < 41; i++) {
      fireEvent.click(button);
    }
    const pElement1 = screen.getByText(/You have clicked 41 times\./i);
    expect(pElement1).toBeInTheDocument();
    fireEvent.click(button);
    const pElement2 = screen.getByText(/That's enough!/i);
    expect(pElement2).toBeInTheDocument();
  });
});
