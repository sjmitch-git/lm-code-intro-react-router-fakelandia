import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Header from "../components/header";

describe("Header component", () => {
  it("renders the Header component with the Nav component", () => {
    const { getByRole, getByTestId } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const headerElement = getByRole("banner");
    expect(headerElement).toBeInTheDocument();

    const navElement = getByTestId("nav");
    expect(navElement).toBeInTheDocument();
  });
});
