import React, { Component } from "react";
import { CardGroup, Card, Row, Col, Button } from "react-bootstrap";
import "./upcoming.css";
import Item from "./items";
import { upcomingMovies } from "../../sampleData/sampleData";
import { withRouter } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

class upcomingmovie extends Component {
  constructor(props) {
    super(props);
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
      { width: 850, itemsToShow: 3 },
      { width: 970, itemsToShow: 4 },
    ];
    this.state = {
      upid: "",
    };
  }
  handleDetails = (obj) => {
    let idup = obj.idupcoming;
    const upid = this.state.upid;
    this.setState({
      upid: obj.idupcoming,
    });
    // console.log(obj.idupcoming, "clicked");
    // console.log(id, "clickedup");

    this.props.history.push({ pathname: "/moviee/avatar", state: idup });
  };
  render() {
    return (
      <Carousel className="carousel" breakPoints={this.breakPoints}>
        {upcomingMovies.map((now, index) => {
          return (
            <div key={now.idupcoming}>
              <Item className="movieitem">
                <div>
                  <Col>
                    <Row className="box arrow-bottom">{now.releaseDate}</Row>
                    <img
                      className="upcomingimages"
                      src={now.image}
                      alt="poto"
                    />
                  </Col>

                  <h1 className="upcomingmovie">
                    <a className="a" href="/moviee">
                      {now.movie}
                    </a>
                  </h1>
                  <p className="upcomig-movie-details">
                    {now.year} <span className="span">{now.type}</span>
                    <span className="span">{now.time}</span>
                    <br />
                    {Array(+now.rating)
                      .fill("")
                      .map((x) => (
                        <FontAwesomeIcon
                          icon={faStar}
                          className="fas-fa-star-upcoming"
                          size="15"
                        />
                      ))}
                  </p>

                  <Button
                    className="upcoming-button-details"
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                      this.handleDetails(now);
                      // console.log("id", now.id);
                      const filmInfo = {
                        upid: now.idupcoming,
                        movie: now.movie,
                        discription: now.discription,
                        discriptionpara: now.discriptionpara,
                        vedio: now.vedio,
                        rating: now.rating,
                        type: now.type,
                        time: now.time,
                        year: now.year,
                        cast: now.cast,
                        releaseDate: now.releaseDate,
                        image: now.image,
                      };
                      sessionStorage.setItem(
                        "filmInfo",
                        JSON.stringify(filmInfo)
                      );
                    }}
                  >
                    Details
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

export default withRouter(upcomingmovie);
