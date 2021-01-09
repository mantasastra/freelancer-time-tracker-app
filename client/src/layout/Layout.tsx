import React from "react";

import Container from "react-bootstrap/Container";
import Navigation from "../components/navigation/Navigation";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navigation />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
