import React from "react";

import { homepage } from "../../../package.json";
import useRequest from "../../hooks/useRequest";

import { Session } from "../sessions/Sessions";
import Row from "react-bootstrap/Row";
import Column from "react-bootstrap/Col";
import OverviewCard from "../../components/overviewCard/OverviewCard";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";

type Data = {
  todaysSessions: Session[];
  thisWeekSessions: Session[];
  thisMonthSessions: Session[];
};

type State = {
  status: string;
  responseData: Data | null;
  errorMessage: string | null;
};

const baseURL = new URL(homepage);

const Overview = () => {
  const { status, responseData, errorMessage }: State = useRequest({
    endpoint: `${baseURL}api/session/overview`,
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
          <h1>Overview </h1>
          {status === "processing" ? (
            <LoadingSpinner />
          ) : (
            <>
              <OverviewCard
                title="Today"
                count={
                  responseData != null ? responseData.todaysSessions.length : 0
                }
                variant="light"
              />
              <OverviewCard
                title="This week"
                count={
                  responseData != null
                    ? responseData.thisWeekSessions.length
                    : 0
                }
                variant="light"
              />
              <OverviewCard
                title="This month"
                count={
                  responseData != null
                    ? responseData.thisMonthSessions.length
                    : 0
                }
                variant="light"
              />
            </>
          )}
        </Column>
      )}
    </>
  );
};

export default Overview;
