import React, { useState, useEffect } from "react";

import request from "../../utils/request";

import Column from "react-bootstrap/Col";
import OverviewCard from "../../components/overviewCard/OverviewCard";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";

const Overview = () => {
  const [state, setState] = useState({
    status: "idle",
    today: 0,
    thisWeek: 0,
    thisMonth: 0,
  });

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      status: "processing",
    }));

    const data = request("http://localhost:8000/api/session/overview", {
      method: "GET",
    });

    data.then(async (res) => {
      if (res.ok) {
        const {
          todaysSessions,
          thisWeekSessions,
          thisMonthSessions,
        } = await res.json();

        setState((prevState) => ({
          ...prevState,
          status: "processed",
          today: todaysSessions.length,
          thisWeek: thisWeekSessions.length,
          thisMonth: thisMonthSessions.length,
        }));
      }
    });
  }, []);

  return (
    <Column className=" justify-content-center mt-5" style={{ width: "30rem" }}>
      <h1>Overview </h1>
      {state.status === "processing" ? (
        <LoadingSpinner />
      ) : (
        <>
          <OverviewCard title="Today" count={state.today} variant="light" />
          <OverviewCard
            title="This week"
            count={state.thisWeek}
            variant="light"
          />
          <OverviewCard
            title="This month"
            count={state.thisMonth}
            variant="light"
          />
        </>
      )}
    </Column>
  );
};

export default Overview;
