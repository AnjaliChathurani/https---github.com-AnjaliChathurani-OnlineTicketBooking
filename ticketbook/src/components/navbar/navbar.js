import React, { Component } from "react";
import { Container, Nav, Navbar, NavLink, Col, Row } from "react-bootstrap";
import "./navbar.css";

class navbar extends Component {
  render() {
    return (
      <Row>
        <Col xs={12} sm={6} md={8} className="nav-col">
          <Navbar className="nav-bar">
            <Nav className="nav">
              <Nav.Link className="image-navbar" href="/home">
                <img
                  className="image-logo-nav"
                  src="https://clipground.com/images/movies-logo-7.jpg"
                  alt="img1"
                />
              </Nav.Link>
              <Nav.Link className="nav-link1" href="/home">
                Home
              </Nav.Link>
              <Nav.Link className="nav-link2" href="/moviee/avatar">
                Movie
              </Nav.Link>
              {/* <Nav.Link className="nav-link3" href="/ticketsummary">
                Ticket
              </Nav.Link> */}
              <NavLink className="nav-link4" href="/home">
                0987554444
              </NavLink>
            </Nav>
          </Navbar>
        </Col>
      </Row>
    );
  }
}

export default navbar;
