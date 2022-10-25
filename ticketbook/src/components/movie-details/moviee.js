import React, { Component } from "react";
import {
  trendingMovies,
  upcomingMovies,
  nowshowingMovies,
} from "../sampleData/sampleData";
import { CardGroup, Card, Row, Col } from "react-bootstrap";

class moviee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: "",
      time: "",
      type: "",
      rating: "",
      discription: "",
    };
  }

  render() {
    return <div></div>;
  }
}

export default moviee;
