import { render } from "@testing-library/react";
import Input from "../components/atoms/input";

describe("Input", () => {
  it("renders Input with default props", () => {
    const { getByRole } = render(<Input name="username" />);

    const input = getByRole("textbox");

    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("form-input");
    expect(input).not.toBeRequired();
  });

  it("renders Input with custom props", () => {
    const { getByRole } = render(<Input type="number" name="age" required />);

    const input = getByRole("spinbutton");

    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("form-input required:bg-yellow-200");
    expect(input).toBeRequired();
  });
});
