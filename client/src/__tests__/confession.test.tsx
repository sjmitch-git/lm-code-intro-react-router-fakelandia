import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Confession from "../pages/confession";

describe("Confession component", () => {
  it("renders the Confession component with Title and Description", () => {
    render(<Confession />);

    const titleElement = screen.getByText("Confess To Us");
    expect(titleElement).toBeInTheDocument();

    const descriptionElement = screen.getByText(
      "Use this page to confess to your own misdemeanour."
    );
    expect(descriptionElement).toBeInTheDocument();
  });
});
