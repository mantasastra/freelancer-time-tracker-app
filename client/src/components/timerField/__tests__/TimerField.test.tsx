import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TimerField from "../TimerField";

describe("TimerField", () => {
  it("should render the timer and handle its functions", () => {
    const startTimer = jest.fn();
    const stopTimer = jest.fn();
    const resetTimer = jest.fn();

    render(
      <TimerField
        status="failed"
        timer={0}
        startTimer={startTimer}
        stopTimer={stopTimer}
        resetTimer={resetTimer}
      />
    );

    expect(screen.getByTestId("timer")).toBeInTheDocument();

    userEvent.click(screen.getByRole("button", { name: /start/i }));
    expect(startTimer).toHaveBeenCalledTimes(1);

    userEvent.click(screen.getByRole("button", { name: /pause/i }));
    expect(stopTimer).toHaveBeenCalledTimes(1);

    userEvent.click(screen.getByRole("button", { name: /reset/i }));
    expect(resetTimer).toHaveBeenCalledTimes(1);
  });
});
