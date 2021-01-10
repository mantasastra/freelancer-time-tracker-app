import React from "react";

import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import formatTime from "../../utils/formatTime";

type Props = {
  status: string;
  timer: number;
  startTimer: () => void;
  stopTimer: () => void;
  resetTimer: () => void;
};

const TimerField: React.FC<Props> = ({
  status,
  timer,
  startTimer,
  stopTimer,
  resetTimer,
}) => (
  <Row className="justify-content-center">
    <h1 data-testid="timer">{formatTime(timer)}</h1>
    <Row>
      <Button
        variant="success"
        className="m-1"
        onClick={startTimer}
        disabled={status === "started"}
      >
        Start
      </Button>
      <Button
        variant="dark"
        className="m-1"
        onClick={stopTimer}
        disabled={
          status === "idle" || status === "stopped" || status === "processed"
        }
      >
        Pause
      </Button>
      <Button
        variant="danger"
        className="m-1"
        onClick={resetTimer}
        disabled={status === "idle" || status === "processed"}
      >
        Reset
      </Button>
    </Row>
  </Row>
);

export default TimerField;
