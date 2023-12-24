import { render, fireEvent, waitFor, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Nav from "../components/nav";

describe("Nav component", () => {
  it("renders the Nav component", () => {
    const { getByTestId, getByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Nav />
      </MemoryRouter>
    );

    const navElement = getByTestId("nav");
    expect(navElement).toBeInTheDocument();

    const brandText = getByText("Fakelandia J.D.");
    expect(brandText).toBeInTheDocument();

    const homeLink = within(navElement).getByText("Home");
    const confessionLink = within(navElement).getByText("Confess To Us");
    const misdemeanorLink = within(navElement).getByText("Misdemeanours");

    expect(homeLink).toBeInTheDocument();
    expect(confessionLink).toBeInTheDocument();
    expect(misdemeanorLink).toBeInTheDocument();
  });

  it("navigates to the correct route when NavLink is clicked", async () => {
    const { getByText, getByTestId } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Nav />
      </MemoryRouter>
    );

    const navElement = getByTestId("nav");

    const confessionLink = within(navElement).getByText("Confess To Us");
    const misdemeanorLink = within(navElement).getByText("Misdemeanours");

    fireEvent.click(confessionLink);

    await waitFor(() => {
      expect(confessionLink).toHaveClass("active");
      expect(misdemeanorLink).not.toHaveClass("active");
    });

    fireEvent.click(misdemeanorLink);

    await waitFor(() => {
      expect(misdemeanorLink).toHaveClass("active");
      expect(confessionLink).not.toHaveClass("active");
    });
  });

  it("toggles the menu when the button is clicked", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );

    const menuElement = getByTestId("menu");
    const menubuttonElement = getByTestId("menubutton");

    // Check that the menu is initially hidden
    expect(menuElement).toHaveClass("hidden");

    // Click the button to toggle the menu
    fireEvent.click(menubuttonElement);

    // Check that the menu is now visible
    expect(menuElement).toHaveClass("flex");

    // Click the button again to hide the menu
    fireEvent.click(menubuttonElement);

    // Check that the menu is hidden again
    expect(menuElement).toHaveClass("hidden");
  });
});
