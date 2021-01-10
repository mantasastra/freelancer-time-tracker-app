import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { server, rest } from "../../../test/server";

import Overview from "../Overview";

describe("Overview", () => {
  it("should show an overview", async () => {
    render(<Overview />);

    await waitForElementToBeRemoved(() => screen.getByTestId("loading"));

    expect(screen.getByText("TODAY")).toBeInTheDocument();
    expect(screen.getByText("THIS WEEK")).toBeInTheDocument();
    expect(screen.getByText("THIS MONTH")).toBeInTheDocument();

    expect(
      screen.getByText("Today you have completed 1 session")
    ).toBeInTheDocument();
    expect(
      screen.getByText("This week you have completed 2 sessions")
    ).toBeInTheDocument();
    expect(
      screen.getByText("This month you have completed 1 session")
    ).toBeInTheDocument();
  });

  it("should show an error message", async () => {
    server.use(
      rest.get(
        "http://localhost:8000/api/session/overview",
        async (req, res, ctx) => {
          return res(ctx.status(400), ctx.json({ error: "__ERROR__" }));
        }
      )
    );

    render(<Overview />);

    await waitForElementToBeRemoved(() => screen.getByTestId("loading"));

    expect(screen.getByText("__ERROR__")).toBeInTheDocument();
  });
});
