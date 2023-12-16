import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main_layout";

describe("MainLayout component", () => {
  it("renders the MainLayout component with Header, Main, and Footer", () => {
    render(
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    );

    // Check if the Header component is rendered
    const headerElement = screen.getByTestId("header");
    expect(headerElement).toBeInTheDocument();

    // Check if main is present
    const mainElement = screen.getByTestId("main");
    expect(mainElement).toBeInTheDocument();

    // Check if the Footer component is rendered
    const footerElement = screen.getByTestId("footer");
    expect(footerElement).toBeInTheDocument();
  });
});
