import React from "react";

import Form from "react-bootstrap/Form";

type Props = {
  status: string;
  successMessage: string | null;
  error: string | null;
};

const Message: React.FC<Props> = ({ status, successMessage, error }) => {
  return (
    <>
      {status === "failed" ? (
        <Form.Text className="text-danger">{error}</Form.Text>
      ) : null}
      {status === "processed" ? (
        <Form.Text className="text-success">{successMessage}</Form.Text>
      ) : null}
    </>
  );
};

export default Message;
