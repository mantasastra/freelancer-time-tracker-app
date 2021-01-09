import React from "react";
import { render, screen } from "@testing-library/react";
import SessionList from "../SessionList";

describe("SessionList", () => {
  it("should render a list of saved sessions", () => {
    const mockData = [
      {
        name: "__SESSION__",
        startDate: "2021-01-09T15:21:38.801Z",
        time: 15,
      },
      {
        name: "__SESSION_TWO__",
        startDate: "2021-01-09T16:11:23.511Z",
        time: 145,
      },
    ];

    render(<SessionList sessions={mockData} />);

    expect(screen.getByText("__SESSION__")).toBeInTheDocument();
    expect(screen.getByText("__SESSION_TWO__")).toBeInTheDocument();
    expect(
      screen.getByText("Started: 09 Jan 2021 15:21:38")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Started: 09 Jan 2021 16:11:23")
    ).toBeInTheDocument();
    expect(screen.getByText("Duration: 00:00:15")).toBeInTheDocument();
    expect(screen.getByText("Duration: 00:02:25")).toBeInTheDocument();
  });

  it("should render a message of no saved sessions", () => {
    render(<SessionList sessions={[]} />);

    expect(
      screen.getByText("There are no saved sessions.")
    ).toBeInTheDocument();
  });
});
