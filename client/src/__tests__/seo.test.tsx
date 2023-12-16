import { render, waitFor } from "@testing-library/react";
import SEO from "../components/seo";

describe("SEO component", () => {
  it("renders title and meta description", async () => {
    const title = "Test Title";
    const description = "Test Description";

    render(<SEO title={title} description={description} />);

    await waitFor(() => {
      expect(document.title).toEqual(title);
      const metaTag = document.querySelector('meta[name="description"]');
      expect(metaTag?.getAttribute("content")).toEqual(description);
    });
  });
});
