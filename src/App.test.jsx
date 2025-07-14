import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { expect } from "vitest";

test("Checkbox flow after button clicked", () => {
  render(<App />);

  // Find elements.
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  const checkboxElement = screen.getByRole("checkbox", {
    name: /disable button/i,
  });

  // Click the button.
  fireEvent.click(buttonElement);

  // Check the checkbox to disable button.
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveClass("gray");

  // Click checkbox again to re-enable button.
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).toHaveClass("midnight-blue");
});
