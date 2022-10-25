import React, { Component } from "react";
import { cast1, upcomingMovies } from "../sampleData/sampleData";
import Item from "./itemsa";
import Carousel from "react-elastic-carousel";
import Movieposter from "../movie-poster-details/movieposter";
import "./moviedetails.css";
import ReactPlayer from "react-player";

class avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmInfoo: [
        {
          current: 0,
          video: "",
          discriptionpara: "",
          cast: [{ name: "", characher: "", photo: "" }],
        },
      ],
    };
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
      { width: 850, itemsToShow: 3 },
      { width: 970, itemsToShow: 4 },
      { width: 970, itemsToShow: 5 },
      { width: 970, itemsToShow: 6 },
    ];
  }
  //getting session storage data
  componentDidMount() {
    var x = this.props.isTicket;
    const filmInfo = JSON.parse(sessionStorage.getItem("filmInfo"));

    this.setState({ filmInfoo: filmInfo, isTicket: true });
  }

  render() {
    console.log("cast", this.state.filmInfoo.video);

    return (
      <div className="avatar-details-movie-details">
        {this.props.isTicket === true ? (
          <Movieposter handleTicket={this.props.handleTicket} />
        ) : (
          <Movieposter handleMovie={this.props.handleMovie} />
        )}

        <div className="avatar-detail">
          <h1 className="avatar-h1">Movie Trailer</h1>

          <ReactPlayer
            url={"https://youtu.be/NZrX_ES93JA"}
            controls="true"
            className="vedio-Avatar "
            width="500"
          />
          {/* <video controls="true" className="vedio-Avatar ">
            <source src={this.state.filmInfoo.video} />
          </video> */}

          <h1 className="avatar-h1">Movie Plot</h1>
          <p className="avatar-discription">
            {this.state.filmInfoo.discriptionpara}
          </p>
        </div>
        <h1 className="movie-cast">Movie Cast</h1>
        <Carousel breakPoints={this.breakPoints} className="avatar-cast">
          {this.state.filmInfoo.cast &&
            this.state.filmInfoo.cast.map((now, index) => {
              return (
                <Item key={index}>
                  <img className="castimages" src={now.photo} alt="poto" />
                  <p className="cast-details">
                    {now.name} <br />({now.characher})
                  </p>
                </Item>
              );
            })}
          {/* <Item>1</Item>
              <Item>2</Item>
              <Item>3</Item>
              <Item>4</Item>
              <Item>5</Item>
              <Item>6</Item> */}
        </Carousel>
      </div>
    );
  }
}

export default avatar;
