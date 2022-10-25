import React, { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./movieposter.css";
import { nowshowingMovies } from "../sampleData/sampleData";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

class movieposter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmInfoo: [
        {
          upid: "",
          movie: "",
          time: "",
          type: "",
          rating: "",
          discription: "",
          year: "",
          image: "",
          id: "",
        },
      ],
      idup: props.location.state,
      idnow: props.location.state,
      idtrending: props.location.state,

      isTicket: false,
    };

    this.handleMovie = () => {
      this.setState({
        isTicket: false,
      });
      this.props.history.push("/moviee/avatar");
    };

    this.handleTicket = () => {
      this.setState({
        isTicket: true,
      });

      this.props.history.push("/ticketsummary");
    };
  }
  componentDidMount() {
    // console.log("upcoming id", this.state.id);

    const filmInfo = JSON.parse(sessionStorage.getItem("filmInfo"));
    // console.log("flim", filmInfo);
    this.setState({ filmInfoo: filmInfo });
  }

  render() {
    const idnow = this.state.idnow;
    const idnowticket = this.state.idnowticket;
    const idtrending = this.state.idtrending;
    console.log("nowtest", idtrending);
    const idup = this.state.idup;
    const upid = this.state.filmInfoo.upid;
    // console.log("id1", this.state.idup);
    // console.log(this.state.filmInfoo.upid);
    // if (idup === upid) {
    //   <></>;
    // } else {

    // }
    return (
      <Col xs={12} sm={12} md={12} lg={12} className="header">
        <Row xs={12} sm={12} md={12} lg={12} className="row-movieposter">
          <Col className="col-movieposter">
            <div>
              <a className="moviepostername" href="/moviee/avatar">
                <h6 className="movie-name-poster">
                  {this.state.filmInfoo.movie}
                </h6>
                {/* <h2>{this.state.filmInfoo.id}</h2> */}
              </a>
            </div>
            <p className="p-discription">{this.state.filmInfoo.discription}</p>
            <div className="poster-details">
              <span className="yeardetails">{this.state.filmInfoo.year}</span>
              <span className="timedetails">{this.state.filmInfoo.time}</span>
              <span className="typedetails">{this.state.filmInfoo.type}</span>
              <br />
              <br />
              <div className="ratingdetails">
                {Array(this.state.filmInfoo.rating)
                  .fill("")
                  .map((x) => (
                    <FontAwesomeIcon icon={faStar} className="fas-fa-star" />
                  ))}
              </div>
            </div>

            {idup !== upid || idnow !== upid ? (
              <Button
                className="details-button"
                onClick={() => this.handleTicket()}
              >
                Ticket booking
              </Button>
            ) : (
              <></>
            )}

            {/* {this.state.isTicket === true ? (
              <Button
                className="details-button"
                onClick={() => this.handleTicket()}
              >
                Ticket booking
              </Button>
            ) : (
              <Button
                className="details-button"
                onClick={() => this.handleMovie()}
              >
                Show Details
              </Button>
            )} */}
          </Col>
        </Row>
      </Col>
    );
  }
}

export default withRouter(movieposter);
