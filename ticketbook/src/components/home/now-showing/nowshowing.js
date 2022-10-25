import React, { Component } from "react";
import { CardGroup, Card, Row, Col, Button } from "react-bootstrap";
import "./nowshowing.css";
import Item from "./item";
import { nowshowingMovies } from "../../sampleData/sampleData";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-elastic-carousel";

class nowshowing extends Component {
  constructor(props) {
    super(props);
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
      { width: 850, itemsToShow: 3 },
      { width: 970, itemsToShow: 4 },
    ];
  }
  handleTicket = (obj) => {
    const idnowticket = obj.idnowticket;
    // console.log(obj.id, "nowidtic");
    // console.log("idnowtic", idnow);

    this.props.history.push({ pathname: "/ticketsummary", state: idnowticket });
  };
  handleDetails = (obj) => {
    const idnow = obj.id;
    // console.log(obj.id, "nowid");
    // console.log("idnow", idnow);
    this.props.history.push({ pathname: "/moviee/avatar", state: idnow });
  };

  render() {
    return (
      <Carousel className="carousel" breakPoints={this.breakPoints}>
        {nowshowingMovies.map((now, index) => {
          return (
            <div key={now.id}>
              <Item className="item">
                <div>
                  <img
                    className="nowshowingimages"
                    src={now.image}
                    alt="poto"
                  />
                  <h1 className="movie-nowshow">
                    <a className="a" href="/moviee">
                      {now.movie}
                    </a>
                  </h1>
                  <p className="movie-details">
                    {now.year} <span className="span">{now.type}</span>
                    <span className="span">{now.time}</span>
                    <br />
                    {Array(+now.rating)
                      .fill("")
                      .map((x) => (
                        <FontAwesomeIcon
                          icon={faStar}
                          className="fas-fa-star-nowshowing"
                          size="15"
                        />
                      ))}
                  </p>
                  <Button
                    className="button-details"
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                      this.handleDetails(now);

                      // console.log("id", now.id);
                      const filmInfo = {
                        id: now.id,
                        movie: now.movie,
                        discription: now.discription,
                        discriptionpara: now.discriptionpara,
                        vedio: now.vedio,
                        rating: now.rating,
                        type: now.type,
                        time: now.time,
                        year: now.year,
                        cast: now.cast,
                      };
                      sessionStorage.setItem(
                        "filmInfo",
                        JSON.stringify(filmInfo)
                      );
                    }}
                  >
                    Details
                  </Button>
                  <Button
                    className="button-ticket"
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                      this.handleTicket(now);
                      const filmInfo = {
                        idnowticket: now.id,
                        movie: now.movie,
                        discription: now.discription,
                        discriptionpara: now.discriptionpara,
                        vedio: now.vedio,
                        rating: now.rating,
                        type: now.type,
                        time: now.time,
                        year: now.year,
                        cast: now.cast,
                        image: now.image,
                      };
                      sessionStorage.setItem(
                        "filmInfo",
                        JSON.stringify(filmInfo)
                      );
                      // console.log("test", filmInfo);
                    }}
                  >
                    Tickets
                  </Button>
                </div>
              </Item>
            </div>
          );
        })}
        {/* <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item>6</Item> */}
      </Carousel>
    );
  }
}

export default withRouter(nowshowing);
