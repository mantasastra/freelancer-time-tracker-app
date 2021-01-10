import React from "react";

import { homepage } from "../../../package.json";
import useRequest from "../../hooks/useRequest";

import Row from "react-bootstrap/Row";
import Column from "react-bootstrap/Col";
import SessionList from "../../components/sessionList/SessionList";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";

export type Session = {
  name: string;
  startDate: string;
  time: number;
};

type State = {
  status: string;
  responseData: Session[] | null;
  errorMessage: string | null;
};

const baseURL = new URL(homepage);

const Sessions: React.FC = () => {
  const { status, responseData, errorMessage }: State = useRequest({
    endpoint: `${baseURL}/session/list`,
  });

  return (
    <>
      {status === "failed" ? (
        <Row className="justify-content-center mt-5">
          <h2>{errorMessage}</h2>
        </Row>
      ) : (
        <Column
          className=" justify-content-center mt-5"
          style={{ width: "30rem" }}
        >
          <h1>Your saved sessions</h1>

          {status === "processing" ? (
            <LoadingSpinner />
          ) : (
            <SessionList sessions={responseData != null ? responseData : []} />
          )}
        </Column>
      )}
    </>
  );
};

export default Sessions;
