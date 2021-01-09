import React, { ChangeEvent, useState, useRef } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import TimerField from "../timerField/TimerField";

type SessionState = {
  name: string;
  timer: number;
  isActive: boolean;
  status: string;
  error: string | null;
};

type TimerRef = {
  current: number | NodeJS.Timeout;
};

const SessionForm: React.FC = () => {
  const [state, setState] = useState<SessionState>({
    name: "",
    timer: 0,
    isActive: false,
    status: "idle",
    error: null,
  });
  const timerRef: TimerRef = useRef(0);
  const { name, timer, isActive, error } = state;

  const startTimer = () => {
    setState((prevState) => ({
      ...prevState,
      isActive: true,
    }));

    timerRef.current = setInterval(() => {
      setState((prevState) => ({
        ...prevState,
        timer: prevState.timer++,
      }));
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current as number);

    setState((prevState) => ({
      ...prevState,
      isActive: false,
    }));
  };

  const resetTimer = () => {
    clearInterval(timerRef.current as number);

    setState((prevState) => ({
      ...prevState,
      name: "",
      timer: 0,
      isActive: false,
      error: null,
    }));
  };

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setState((prevState) => ({
      ...prevState,
      name: value,
    }));
  };

  const handleSave = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      name,
      time: timer,
    };

    setState((prevState) => ({
      ...prevState,
      status: "processing",
    }));

    await fetch("http://localhost:8000/api/session/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(async (res) => {
      const result = await res.json();

      console.log(result);

      resetTimer();

      setState((prevState) => ({
        ...prevState,
        status: "processed",
      }));
    });
  };

  return (
    <Form onSubmit={handleSave}>
      <Form.Group controlId="session-name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          type="text"
          placeholder="Enter session name"
          value={name}
          onChange={handleName}
        />
      </Form.Group>
      <TimerField
        timer={timer}
        isActive={isActive}
        startTimer={startTimer}
        stopTimer={stopTimer}
        resetTimer={resetTimer}
      />
      <Button
        variant="primary"
        type="submit"
        className="mt-3"
        block
        disabled={error != null || !name || !timer || isActive}
      >
        Save
      </Button>
    </Form>
  );
};

export default SessionForm;
