import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("should render with header, main, and footer sections", () => {
    const { container } = render(<App />);

    const header = container.querySelector("header");
    expect(header).toBeInTheDocument();

    const main = container.querySelector("main");
    expect(main).toBeInTheDocument();

    const footer = container.querySelector("footer");
    expect(footer).toBeInTheDocument();
  });
});
