import { render, screen } from "@testing-library/react";
import Button from "../components/atoms/button";

describe("Button", () => {
  it("renders Button with default props", () => {
    render(<Button type="button">Click me</Button>);

    const button = screen.getByRole("button", { name: /click me/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("btn");
    expect(button).not.toHaveClass("bg-info");
    expect(button).not.toBeDisabled();
  });

  it("renders Button with custom props", () => {
    render(
      <Button type="submit" variant="info" fullWidth disabled>
        Submit
      </Button>
    );

    const button = screen.getByRole("button", { name: /submit/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("btn bg-info");
    expect(button).toBeDisabled();
  });
});
