import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Movieposter from "../movie-poster-details/movieposter";
import Selectdatetime from "./selectdatetime";
import Pay from "./pay";
import "./ticketbook.css";

class ticketsummary extends Component {
  render() {
    return (
      <div>
        <Movieposter />
        <div>
          <Selectdatetime />
        </div>
      </div>
    );
  }
}

export default ticketsummary;
