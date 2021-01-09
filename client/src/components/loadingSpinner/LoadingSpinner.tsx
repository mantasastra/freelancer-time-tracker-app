import React from "react";
import Row from "react-bootstrap/Row";
import BeatLoader from "react-spinners/BeatLoader";

const LoadingSpinner = () => (
  <Row data-testid="loading" className="justify-content-center mt-5">
    <BeatLoader size={10} color={"hsl(205, 100%, 56%)"} />
  </Row>
);

export default LoadingSpinner;
