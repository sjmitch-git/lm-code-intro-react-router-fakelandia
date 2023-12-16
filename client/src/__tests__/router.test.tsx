import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Router from "../router/router";

describe("Router component", () => {
  it("renders the Router component with routes", () => {
    render(
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    );

    const homeElement = screen.getByText("Welcome to the Justice Department of Fakelandia");
    expect(homeElement).toBeInTheDocument();

    render(
      <MemoryRouter initialEntries={["/confession"]}>
        <Router />
      </MemoryRouter>
    );

    const confessionElement = screen.getByText("Confession!");
    expect(confessionElement).toBeInTheDocument();

    render(
      <MemoryRouter initialEntries={["/misdemeanour"]}>
        <Router />
      </MemoryRouter>
    );

    const misdemenourElement = screen.getByText("Misdemeanour!");
    expect(misdemenourElement).toBeInTheDocument();

    render(
      <MemoryRouter initialEntries={["/unknownpage"]}>
        <Router />
      </MemoryRouter>
    );

    const pagenotfoundElement = screen.getByText("Not Found!");
    expect(pagenotfoundElement).toBeInTheDocument();
  });
});
