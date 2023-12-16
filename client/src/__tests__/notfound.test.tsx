import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NotFound from "../pages/notfound";

describe("NotFound component", () => {
  it("renders the NotFound component with Title and Description", () => {
    render(<NotFound />);

    const titleElement = screen.getByText("Not Found!");
    expect(titleElement).toBeInTheDocument();

    const descriptionElement = screen.getByText("Oops! The page you requested could not be found.");
    expect(descriptionElement).toBeInTheDocument();
  });
});
