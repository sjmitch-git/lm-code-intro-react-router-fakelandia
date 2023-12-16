import { render } from "@testing-library/react";

import Footer from "../components/footer";

describe("Footer component", () => {
  it("renders the footer with the correct content", () => {
    const { getByText, container } = render(<Footer />);

    expect(getByText(/© 2023 Stephen/)).toBeInTheDocument();
  });
});
