import { render } from "@testing-library/react";

import Title from "../components/title";

describe("Title component", () => {
  it("renders the title with correct text", () => {
    const titleText = "Hello, World!";

    const { getByText, container } = render(<Title title={titleText} />);

    expect(getByText(titleText)).toBeInTheDocument();
  });
});
