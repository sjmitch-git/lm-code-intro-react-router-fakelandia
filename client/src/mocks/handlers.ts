import { rest } from "msw";

const handlers = [
  rest.post("http://localhost:8080/api/confess", async (req, res, ctx) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return res(ctx.status(200), ctx.json({ success: true, message: "Mocked response" }));
  }),
];

export { handlers };
