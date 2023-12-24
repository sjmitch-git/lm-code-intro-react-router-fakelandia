import { render, screen } from "@testing-library/react";
import Alert from "../components/alert";

describe("Alert", () => {
  it("renders an alert with default status and message", () => {
    render(<Alert message="Test message" />);

    const alertElement = screen.getByTestId("alert");

    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toHaveClass("bg-info text-light");
    expect(screen.getByText("Test message")).toBeInTheDocument();
  });

  it("renders an alert with specified status, title, and message", () => {
    render(<Alert title="Test Title" message="Test message" status="success" />);

    const alertElement = screen.getByTestId("alert");

    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toHaveClass("bg-success text-light");
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test message")).toBeInTheDocument();
  });
});
