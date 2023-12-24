import { render, screen } from "@testing-library/react";
import FormAction from "../components/form_action";

describe("FormAction", () => {
  it("renders FormAction with default label and isFormValid true", () => {
    render(<FormAction isFormValid={true} />);

    const submitButton = screen.getByRole("button", { name: /submit/i });
    const errorMessage = screen.queryByText("Please fill in all required fields correctly.");

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeEnabled();
    expect(errorMessage).not.toBeInTheDocument();
  });

  it("renders FormAction with custom label and isFormValid false", () => {
    render(<FormAction isFormValid={false} label="Custom Label" />);

    const submitButton = screen.getByRole("button", { name: /custom label/i });
    const errorMessage = screen.getByText("Please fill in all required fields correctly.");

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
    expect(errorMessage).toBeInTheDocument();
  });
});
