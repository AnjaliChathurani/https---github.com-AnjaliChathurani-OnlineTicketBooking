import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Selectdatetime from "./selectdatetime";

class pay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmInfoo: [
        {
          image: "",
        },
      ],
    };
  }
  //getting session storage data
  componentDidMount() {
    const filmInfo = JSON.parse(sessionStorage.getItem("filmInfo"));

    this.setState({ filmInfoo: filmInfo });
  }
  render() {
    return <div></div>;
  }
}

export default pay;
