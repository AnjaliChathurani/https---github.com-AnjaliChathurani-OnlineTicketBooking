import React, { Component } from "react";
import {
  CardGroup,
  Card,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import "./home.css";
import { trendingMovies } from ".././sampleData/sampleData.js";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

class trending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: "",
      time: "",
      type: "",
      rating: "",
      discription: "",
      image: "",
    };
  }

  render() {
    return (
      <Col xs={12} sm={12} md={12} lg={12} className="trendingcol">
        {/* trending movies */}
        <Row className="trendingrow1">
          <Col
            xs={8}
            className="trendingcol1"
            onClick={() => {
              const idtrending = trendingMovies[0].id;
              this.props.history.push({
                pathname: "/moviee/avatar",
                state: idtrending,
              });
              // console.log("id", id);
              const filmInfo = {
                id: trendingMovies[0].id,
                movie: trendingMovies[0].movie,
                discription: trendingMovies[0].discription,
                discriptionpara: trendingMovies[0].discriptionpara,
                vedio: trendingMovies[0].vedio,
                rating: trendingMovies[0].rating,
                type: trendingMovies[0].type,
                time: trendingMovies[0].time,
                year: trendingMovies[0].year,
                cast: trendingMovies[0].cast,
                image: trendingMovies[0].image,
              };
              sessionStorage.setItem("filmInfo", JSON.stringify(filmInfo));
            }}
          >
            <div className="trending-all-details">
              <h2>
                <a className="h2-movie-trend" href="/moviee/avatar">
                  {trendingMovies[0].movie}
                </a>
              </h2>
              <p>{trendingMovies[0].discription}</p>
              <div className="movie-trending-detail">
                <span className="trendingYear">{trendingMovies[0].year}</span>
                <span className="trendingTime">{trendingMovies[0].time}</span>
                <span className="trendingType">{trendingMovies[0].type}</span>
              </div>
              <div>
                {Array(+trendingMovies[0].rating)
                  .fill("")
                  .map((x) => (
                    <FontAwesomeIcon
                      icon={faStar}
                      className="fas-fa-star-trending"
                    />
                  ))}
              </div>
            </div>

            {/* <img
              className="trendingimages"
              src={trendingMovies[0].image}
              alt="poto"
            /> */}
          </Col>

          <Col xs={4} className="trendingcol2">
            {trendingMovies.map((mlist) => {
              return (
                <Row
                  className="onclick"
                  onClick={() => {
                    const idtrending = mlist.id;
                    this.props.history.push({
                      pathname: "/moviee/avatar",
                      state: idtrending,
                    });
                    // console.log("id", mlist.id);
                    const filmInfo = {
                      id: mlist.id,
                      movie: mlist.movie,
                      discription: mlist.discription,
                      discriptionpara: mlist.discriptionpara,
                      vedio: mlist.vedio,
                      rating: mlist.rating,
                      type: mlist.type,
                      time: mlist.time,
                      year: mlist.year,
                      cast: mlist.cast,
                      image: mlist.image,
                    };
                    sessionStorage.setItem(
                      "filmInfo",
                      JSON.stringify(filmInfo)
                    );
                  }}
                  key={mlist.id}
                >
                  <p className="detail">
                    <img
                      className="trending-image"
                      src={mlist.image}
                      alt="poto"
                    />
                    <div className="trending-details2">
                      <a className="h2-movie">{mlist.movie}</a>
                      <br />
                      <span className="year-trending-details">
                        {mlist.year}
                      </span>
                      <span className="span">{mlist.type}</span>
                      <span className="span">{mlist.time}</span>
                      {/* {mlist.year}| {mlist.time}| {mlist.type} */}
                      <br />
                      {Array(+mlist.rating)
                        .fill("")
                        .map((x) => (
                          <FontAwesomeIcon
                            icon={faStar}
                            className="fas-fa-star-trending"
                            font-size="10"
                          />
                        ))}
                    </div>
                  </p>
                </Row>
              );
            })}
          </Col>
        </Row>
      </Col>
    );
  }
}
export default withRouter(trending);
