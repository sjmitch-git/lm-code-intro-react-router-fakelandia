import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages/home";

describe("Home component", () => {
  it("renders the Home component with Title and Description", () => {
    render(<Home />);

    const titleElement = screen.getByText("Welcome to the Justice Department of Fakelandia");
    expect(titleElement).toBeInTheDocument();

    const descriptionElement = screen.getByText(
      "Here you can browse a list of recent misdemeanours committed by our citizens, or you can confess to your own misdemeanour."
    );
    expect(descriptionElement).toBeInTheDocument();
  });
});
