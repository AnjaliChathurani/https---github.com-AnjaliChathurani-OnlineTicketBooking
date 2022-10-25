import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";
import { MdHome, MdEmail, MdPhone, MdFacebook } from "react-icons/md";
import { GrTwitter } from "react-icons/gr";

class footer extends Component {
  render() {
    return (
      <div>
        <Container className="footer">
          <Row className="Row1">
            <Col xs={6} className="menu-detail">
              <a href="/trending">
                <img
                  className="footer-image"
                  src="https://clipground.com/images/movies-logo-7.jpg"
                  alt="img1"
                />
              </a>

              <Row>
                <p>
                  <a className="row3" href="/home">
                    Home
                  </a>
                </p>
              </Row>
              <Row>
                <p>
                  <a className="row3" href="/ticketsummary">
                    Ticket
                  </a>
                </p>
              </Row>
              <Row>
                <p>
                  <a className="row3" href="/moviee/avatar">
                    Movie
                  </a>
                </p>
              </Row>
            </Col>
            <Col xs={3} className="contact-details">
              <span className="facebook-icon">
                <MdFacebook />
              </span>
              <span className="facebook-icon">
                <GrTwitter />
              </span>

              <p className="contact-heading">Contacts</p>
              <p>
                <MdHome /> New York, NY 10012, US
              </p>
              <p>
                <MdEmail />
                info@example.com
              </p>
              <p>
                <MdPhone /> + 01 234 567 88
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default footer;
