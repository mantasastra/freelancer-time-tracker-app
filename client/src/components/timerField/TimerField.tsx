import React from "react";

import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import formatTime from "../../utils/formatTime";

type Props = {
  timer: number;
  isActive: boolean;
  startTimer: () => void;
  stopTimer: () => void;
  resetTimer: () => void;
};

const TimerField: React.FC<Props> = ({
  timer,
  isActive,
  startTimer,
  stopTimer,
  resetTimer,
}) => (
  <Row className="justify-content-center">
    <h1>{formatTime(timer)}</h1>
    <Row>
      <Button
        variant="success"
        className="m-1"
        onClick={startTimer}
        disabled={isActive}
      >
        Start
      </Button>
      <Button
        variant="dark"
        className="m-1"
        onClick={stopTimer}
        disabled={!isActive}
      >
        Pause
      </Button>
      <Button
        variant="danger"
        className="m-1"
        onClick={resetTimer}
        disabled={!timer}
      >
        Reset
      </Button>
    </Row>
  </Row>
);

export default TimerField;
