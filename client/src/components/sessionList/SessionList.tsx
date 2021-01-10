import React from "react";
import format from "date-fns/format";
import formatTime from "../../utils/formatTime";

import Card from "react-bootstrap/Card";
import { Session } from "../../pages/sessions/Sessions";

type Props = {
  sessions: Session[];
};

const SessionList: React.FC<Props> = ({ sessions }) => {
  return sessions.length === 0 ? (
    <h2>There are no saved sessions.</h2>
  ) : (
    <div>
      {sessions.map(({ name, startDate, time }, index) => {
        const formattedDate = format(
          new Date(startDate),
          "dd MMM yyyy HH:mm:ss"
        );

        return (
          <Card key={index} className="m-2">
            <Card.Body>
              <Card.Title>{name.toUpperCase()}</Card.Title>
              <Card.Subtitle
                data-testid={`session-date-${index}`}
                className="text-muted"
              >
                Started: {formattedDate}
              </Card.Subtitle>
              <Card.Text data-testid={`session-duration-${index}`}>
                Duration: {formatTime(time)}
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default SessionList;
