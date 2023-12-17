import { render, screen } from "@testing-library/react";
import Loading from "../components/loading";

describe("Loading component", () => {
  it("renders correctly with no message", () => {
    render(<Loading />);

    // Assert
    expect(screen.getByTestId("loading")).toBeInTheDocument();
    expect(screen.getByTestId("loading-svg")).toBeInTheDocument();
    expect(screen.queryByText("Loading")).toBeNull();
  });

  it("renders correctly with a custom message", () => {
    render(<Loading message="Custom Loading Message" />);

    // Assert
    expect(screen.getByTestId("loading")).toBeInTheDocument();
    expect(screen.getByTestId("loading-svg")).toBeInTheDocument();
    expect(screen.getByText("Custom Loading Message")).toBeInTheDocument();
  });
});
