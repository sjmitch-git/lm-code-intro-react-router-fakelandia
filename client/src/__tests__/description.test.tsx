import { render } from "@testing-library/react";

import Description from "../components/description";

describe("Description component", () => {
  it("renders the description with correct text", () => {
    const descriptionText = "Hello, World!";

    const { getByText, container } = render(<Description description={descriptionText} />);

    expect(getByText(descriptionText)).toBeInTheDocument();
  });
});
