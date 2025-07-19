import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("renders initial count as 0", () => {
    render(<App />);
    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
  });

  test("increments count when button is clicked", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /increment/i });
    fireEvent.click(button);
    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
  });
});
