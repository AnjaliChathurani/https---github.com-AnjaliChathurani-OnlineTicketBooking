import React, { Component } from "react";
import Trending from "./trending";
import Nowshowing from "./now-showing/nowshowing";
import Upcomingmovie from "./upcoming/upcomingmovie";
import { Col, Row } from "react-bootstrap";

class home extends Component {
  render() {
    return (
      <div>
        <Row>
          <div>
            <Trending />
          </div>
        </Row>

        <Row>
          <h2 className="nowshowing-title">Now showing</h2>
          <Col>
            <Nowshowing />
          </Col>
        </Row>
        <Row>
          <h2 className="nowshowing-title">Upcoming Movies</h2>
          <Col>
            <Upcomingmovie />
          </Col>
        </Row>
      </div>
    );
  }
}

export default home;
