import React from "react";

import { render, screen } from "@testing-library/react";

import NewSession from "../NewSession";

describe("NewSession", () => {
  it("should render a form", () => {
    render(<NewSession />);

    expect(screen.getByTestId("session-name")).toBeInTheDocument();
    expect(screen.getByTestId("timer")).toBeInTheDocument();
  });
});
