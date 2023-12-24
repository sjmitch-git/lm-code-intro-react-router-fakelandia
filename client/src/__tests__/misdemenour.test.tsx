import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Misdemeanour from "../pages/misdemeanour";

describe("Misdemeanour component", () => {
  it("renders the Misdemeanour component with Title and Description", () => {
    render(<Misdemeanour />);

    const h1Element = screen.getByTestId("title");
    expect(h1Element).toHaveTextContent(/Misdemeanours/i);

    const descriptionElement = screen.getByText(
      "Here you can browse a list of recent misdemeanours committed by our citizens."
    );
    expect(descriptionElement).toBeInTheDocument();
  });
});
