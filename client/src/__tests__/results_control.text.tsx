import { render, fireEvent, act } from "@testing-library/react";
import { MisdemeanourProvider } from "../contexts/MisdemeanourContext";
import ResultsControl from "../components/results_control";

describe("ResultsControl", () => {
  it("should update results count when a radio button is selected", () => {
    const { getByLabelText } = render(
      <MisdemeanourProvider>
        <ResultsControl />
      </MisdemeanourProvider>
    );

    const radioInput = getByLabelText("20");
    act(() => {
      fireEvent.click(radioInput);
    });

    expect(radioInput.parentElement?.classList.contains("active")).toBe(true);

    expect((radioInput as HTMLInputElement).checked).toBe(true);
  });

  it("should have the active class on the selected radio button", () => {
    const { getByLabelText } = render(
      <MisdemeanourProvider>
        <ResultsControl />
      </MisdemeanourProvider>
    );

    const radioInput = getByLabelText("10");
    act(() => {
      fireEvent.click(radioInput);
    });

    expect(radioInput.parentElement?.classList.contains("active")).toBe(true);
  });
});
