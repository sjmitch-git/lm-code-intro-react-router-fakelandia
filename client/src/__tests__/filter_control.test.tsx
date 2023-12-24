import { render, fireEvent, waitFor } from "@testing-library/react";
import { MisdemeanourProvider } from "../contexts/MisdemeanourContext";
import FilterControl from "../components/filter_control";

describe("FilterControl", () => {
  it.skip("should update filter when a radio button is selected", async () => {
    const { getByLabelText } = render(
      <MisdemeanourProvider>
        <FilterControl />
      </MisdemeanourProvider>
    );

    const radioInput = getByLabelText("rudeness");

    fireEvent.click(radioInput);

    await waitFor(() => {
      // Ensure that the selected filter is reflected in the context
      // Check the console.log statements for debugging
      //  console.log("Context: ", global.mockContextValue);
      // expect(global.mockContextValue?.filter).toBe("rudeness");
    });
  });

  it.skip("should clear filter when the 'Clear Filter' button is clicked", async () => {
    // Mock initial context value with a filter
    // global.mockContextValue = { filter: "rudeness", setFilter: jest.fn() };

    const { getByText } = render(
      <MisdemeanourProvider>
        <FilterControl />
      </MisdemeanourProvider>
    );

    const clearFilterButton = getByText("Clear Filter");

    fireEvent.click(clearFilterButton);

    await waitFor(() => {
      // Ensure that the filter is cleared in the context
      // console.log("Context: ", global.mockContextValue);
      // expect(global.mockContextValue?.filter).toBe(null);
    });
  });
});
