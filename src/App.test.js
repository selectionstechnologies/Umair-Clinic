import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders clinic name", () => {
  render(<App />);
  expect(screen.getAllByText(/Umair Clinic/i).length).toBeGreaterThan(0);
});
