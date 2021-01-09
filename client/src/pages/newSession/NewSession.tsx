import React from "react";

import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

import SessionForm from "../../components/sessionForm/SessionForm";

const NewSession = () => {
  return (
    <Row className="justify-content-center">
      <Card style={{ marginTop: 50, width: "20rem" }}>
        <Card.Body>
          <Card.Title className="text-center">New Session</Card.Title>
          <SessionForm />
        </Card.Body>
      </Card>
    </Row>
  );
};

export default NewSession;
