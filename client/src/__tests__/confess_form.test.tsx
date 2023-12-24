import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { server } from "../mswSetup";
import ConfessForm from "../components/confess_forrm";

describe("ConfessForm", () => {
  it("submits form successfully", async () => {
    render(<ConfessForm />);

    fireEvent.change(screen.getByLabelText("Subject:"), { target: { value: "Test Subject" } });
    fireEvent.change(screen.getByLabelText("Reason:"), { target: { value: "united" } });
    fireEvent.change(screen.getByLabelText("Details:"), { target: { value: "Some Details" } });

    expect(screen.getByLabelText("Subject:")).toHaveValue("Test Subject");
    expect(screen.getByLabelText("Reason:")).toHaveValue("united");
    expect(screen.getByLabelText("Details:")).toHaveValue("Some Details");

    // Trigger form submission
    fireEvent.submit(screen.getByTestId("confess-form"));

    // Wait for the asynchronous operation (e.g., API request) to complete
    // await waitFor(() => {});

    // loading component
    await waitFor(() => {
      expect(screen.getByTestId("loading")).toBeInTheDocument();
      expect(screen.queryByText("Posting Data")).toBeInTheDocument();
    });
  });
});
