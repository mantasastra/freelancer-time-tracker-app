import React from "react";
import Card from "react-bootstrap/Card";

type Props = {
  title: string;
  count: number;
  variant?: string;
};

const OverviewCard: React.FC<Props> = ({ title, count, variant }) => (
  <Card
    bg={variant}
    text={variant === "light" ? "dark" : "white"}
    className="mt-3"
  >
    <Card.Body>
      <Card.Title>{title.toUpperCase()}</Card.Title>
      <Card.Text>
        {title} you have completed {count}
        {count > 1 || count === 0 ? " sessions" : " session"}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default OverviewCard;
