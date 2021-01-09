import React, { ChangeEvent, useState, useRef } from "react";

import request from "../../utils/request";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import TimerField from "../timerField/TimerField";
import Message from "../message/Message";

type SessionState = {
  status: string;
  name: string;
  timer: number;
  startDate: Date | null;
  message: string | null;
  error: string | null;
};

type TimerRef = {
  current: number | NodeJS.Timeout;
};

const SessionForm: React.FC = () => {
  const [state, setState] = useState<SessionState>({
    status: "idle",
    name: "",
    timer: 0,
    startDate: null,
    message: null,
    error: null,
  });
  const timerRef: TimerRef = useRef(0);
  const { status, name, timer, startDate, error } = state;

  const startTimer = () => {
    setState((prevState) => ({
      ...prevState,
      status: "started",
      startDate: new Date(),
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
      status: "stopped",
    }));
  };

  const resetTimer = () => {
    clearInterval(timerRef.current as number);

    setState({
      status: "idle",
      name: "",
      timer: 0,
      startDate: null,
      message: null,
      error: null,
    });
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
      startDate,
      time: timer,
    };

    setState((prevState) => ({
      ...prevState,
      status: "processing",
    }));

    await request("/session/add", {
      method: "POST",
      body: JSON.stringify(data),
    }).then(async (res) => {
      if (!res.ok) {
        const { error } = await res.json();

        setState((prevState) => ({
          ...prevState,
          status: "failed",
          error,
        }));
      } else {
        const { message } = await res.json();

        resetTimer();

        setState((prevState) => ({
          ...prevState,
          status: "processed",
          message,
        }));
      }
    });
  };

  return (
    <Form onSubmit={handleSave}>
      <Form.Group controlId="session-name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          data-testid="session-name"
          name="name"
          type="text"
          placeholder="Enter session name"
          value={name}
          onChange={handleName}
        />
      </Form.Group>
      <TimerField
        timer={timer}
        status={status}
        startTimer={startTimer}
        stopTimer={stopTimer}
        resetTimer={resetTimer}
      />
      <Button
        variant="primary"
        type="submit"
        className="mt-3"
        block
        disabled={error != null || !name || !timer || status === "idle"}
      >
        Save
      </Button>
      <Message status={status} successMessage={state.message} error={error} />
    </Form>
  );
};

export default SessionForm;
