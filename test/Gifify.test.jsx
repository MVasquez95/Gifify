import { render, screen } from "@testing-library/react";
import { GififyApp } from "../src/Gifify";

describe("Pruebas en <GififyApp />", () => {
  it("should render correctly", () => {
    render(<GififyApp />);
    screen.debug();
  });
  it("should display the initial category", () => {
    const { getByRole } = render(<GififyApp />);
    const heading = getByRole("heading", { level: 3 });
    expect(heading).not.toBe("");
  });
});
