import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { server, rest } from "../../../test/server";

import Sessions from "../Sessions";

describe("Sessions", () => {
  it("should show saved sessions", async () => {
    render(<Sessions />);

    await waitForElementToBeRemoved(() => screen.getByTestId("loading"));

    expect(screen.getByText("__NAME__")).toBeInTheDocument();
    expect(screen.getByText("__NAME_TWO__")).toBeInTheDocument();
    expect(screen.getByText("__NAME_THREE__")).toBeInTheDocument();

    expect(screen.getByTestId("session-date-0")).toBeInTheDocument();
    expect(screen.getByTestId("session-date-1")).toBeInTheDocument();
    expect(screen.getByTestId("session-date-2")).toBeInTheDocument();

    expect(screen.getByTestId("session-duration-0")).toBeInTheDocument();
    expect(screen.getByTestId("session-duration-1")).toBeInTheDocument();
    expect(screen.getByTestId("session-duration-2")).toBeInTheDocument();
  });

  it("should show an error message", async () => {
    server.use(
      rest.get(
        "http://localhost:8000/api/session/list",
        async (req, res, ctx) => {
          return res(ctx.status(400), ctx.json({ error: "__ERROR__" }));
        }
      )
    );

    render(<Sessions />);

    await waitForElementToBeRemoved(() => screen.getByTestId("loading"));

    expect(screen.getByText("__ERROR__")).toBeInTheDocument();
  });
});
