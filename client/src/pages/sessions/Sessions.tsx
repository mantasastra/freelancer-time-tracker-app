import React, { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";

import request from "../../utils/request";

import Row from "react-bootstrap/Row";
import Column from "react-bootstrap/Col";
import SessionList from "../../components/sessionList/SessionList";

export type Session = {
  name: string;
  startDate: string;
  time: number;
};

type SessionState = {
  status: string;
  sessions: Session[];
  error: string | null;
};

const Sessions: React.FC = () => {
  const [state, setState] = useState<SessionState>({
    status: "idle",
    sessions: [],
    error: null,
  });
  const { status, sessions, error } = state;

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      status: "processing",
    }));

    const data = request("http://localhost:8000/api/session/list", {
      method: "GET",
    });

    data.then(async (res) => {
      if (!res.ok) {
        const { error } = await res.json();

        setState({
          status: "failed",
          sessions: [],
          error,
        });
      } else {
        const sessions = await res.json();

        setState((prevState) => ({
          ...prevState,
          sessions,
          status: "processed",
        }));
      }
    });
  }, []);

  return (
    <>
      {status === "processing" ? (
        <Row data-testid="loading" className="justify-content-center mt-5">
          <BeatLoader size={10} color={"hsl(205, 100%, 56%)"} />
        </Row>
      ) : (
        <Column
          className=" justify-content-center mt-5"
          style={{ width: "30rem" }}
        >
          <h1>Your saved sessions</h1>

          <SessionList sessions={sessions} />
        </Column>
      )}
      {status === "failed" ? (
        <Row className="justify-content-center mt-5">
          <h1>{error}</h1>
        </Row>
      ) : null}
    </>
  );
};

export default Sessions;
