import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  const location = useLocation();

  return (
    <Navbar collapseOnSelect bg="light" expand="lg">
      <Navbar.Brand data-testid="nav-title">
        Freelancer Time Tracker
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav data-testid="nav-links" activeKey={location.pathname}>
          <Nav.Link as={NavLink} exact to="/">
            New Session
          </Nav.Link>
          <Nav.Link as={NavLink} exact to="/sessions">
            Sessions
          </Nav.Link>
          <Nav.Link as={NavLink} exact to="/overview">
            Overview
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
