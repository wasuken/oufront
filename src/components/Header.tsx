import React from "react";
import { Navbar, Nav, Container } from "react-react-bootstrap";
import { Link } from "react-react-router-dom";

export function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Text>
            <Link to="/">Events</Link>
          </Navbar.Text>
          <Navbar.Text>
            <Link to="/profile">Profile</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
