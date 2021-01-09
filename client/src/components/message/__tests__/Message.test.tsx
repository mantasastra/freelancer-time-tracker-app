import React from "react";
import { render, screen } from "@testing-library/react";
import Message from "../Message";

describe("Message", () => {
  it("should render an error message", () => {
    render(<Message status="failed" successMessage={null} error="__ERROR__" />);

    expect(screen.getByText("__ERROR__")).toBeInTheDocument();
  });

  it("should render a success message", () => {
    const message = "__SUCCESS__";

    render(
      <Message status="processed" successMessage={message} error={null} />
    );

    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it("should not render a message", () => {
    render(<Message status="idle" successMessage={null} error={null} />);

    expect(screen.queryByTestId("error-message")).not.toBeInTheDocument();
    expect(screen.queryByTestId("success-message")).not.toBeInTheDocument();
  });
});
