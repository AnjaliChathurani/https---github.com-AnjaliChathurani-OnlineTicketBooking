import React, { Component } from "react";
import { dates } from "../sampleData/sampleData";
import Carousel from "react-elastic-carousel";
import Item from "../movie-details/itemsa";
import "./ticketbook.css";
import { Col, Row, Button } from "react-bootstrap";
import { MdEventSeat } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLoveseat } from "@fortawesome/free-solid-svg-icons";

class selectdatetime extends Component {
  constructor(props) {
    super(props);
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 10, itemsToShow: 2, itemsToScroll: 2, pagination: false },
      { width: 30, itemsToShow: 3 },
      { width: 50, itemsToShow: 4 },
    ];
    this.state = {
      timedate: [{ id: "", month: "", dates: "", day: "" }],
      isShowntime: false,
      isShownCinema: false,
      isShownseat: false,
      index: -1,
      isSelected: false,
      filmInfoo: [
        {
          image: "",
        },
      ],
      showtime: [{ idn: "", time: "" }],
      showCinema: [{ idnum: "", cinema: "" }],
      showSeat: [],
      showSeat2: [],
      showBox: [],
      count: 0,
      countbox: 0,
      total: 0,
      regularSeats: 0,
      box: 0,
    };
  }
  handleClick = (obj) => {
    var ticket = this.props.isTicket;
    this.setState(
      {
        showtime: obj.showtime,
        isShowntime: true,
        isTicket: false,
        index: obj.id,
      },
      () => {
        console.log("in", this.state.index);
      }
    );
  };

  handleClickCinema = (obje) => {
    var ticket = this.props.isTicket;
    this.setState(
      {
        showCinema: obje.showCinema,
        isShownCinema: true,
        isTicket: false,
        index: obje.idn,
      },
      () => {
        // console.log("cinema", this.state.showCinema);
        console.log("index", this.state.index);
      }
    );
  };
  handleClickSeat = (obje) => {
    var ticket = this.props.isTicket;
    this.setState(
      {
        showSeat: obje.showSeat,
        isShownseat: true,
        isTicket: false,
        index: obje.idnum,
      },
      () => {
        console.log("indexnumm", this.state.index);
      }
    );
  };
  handleSelectSeat = (x, y) => {
    let id = "R" + x + "C" + y;
    var seats = this.state.showSeat2;

    var avl_index = seats.indexOf(id);

    if (avl_index === -1) {
      seats.push(id);
    } else {
      seats.splice(avl_index, 1);
    }

    this.setState({
      showSeat2: seats,
      // count: this.state.count + 1,

      isSelected: true,
    });

    this.state.regularSeats = this.state.showSeat2.length * 1000;

    // console.log(seats.length, "seat");
    // console.log(this.state.regularSeats, "regularSeats");
  };
  handleSelectBox = (p, q) => {
    let id = "R" + p + "C" + q;
    var box = this.state.showBox;
    var avl_index = box.indexOf(id);

    if (avl_index === -1) {
      box.push(id);
    } else {
      box.splice(avl_index, 1);
    }

    this.setState({
      showBox: box,
      // countbox: this.state.countbox + 1,
      isSelected: true,
    });
    // this.state.countbox = this.state.countbox + 1;
    this.state.box = this.state.showBox.length * 2000;

    // console.log(this.state.showBox.length, "box");
    // console.log(this.state.box + this.state.regularSeats, "total");
  };

  componentDidMount() {
    const filmInfo = JSON.parse(sessionStorage.getItem("filmInfo"));

    this.setState({ filmInfoo: filmInfo });
  }

  render() {
    this.state.total = this.state.regularSeats + this.state.box;
    let seat = [];
    for (let x = 0; x < 8; x++) {
      let col = [];
      for (let y = 0; y < 12; y++) {
        // "R"+x+"C"+y -> 1+4 =R1C4
        // selected array loop , check R1C4

        let id = "R" + x + "C" + y;
        let isSelected = false;

        for (let i = 0; i < this.state.showSeat2.length; i++) {
          if (id === this.state.showSeat2[i]) {
            isSelected = true;
            // console.log("shoo sheet", this.state.showSeat2.length);
          }
        }

        col.push(
          <MdEventSeat
            className={"icon-seat" + (isSelected === true ? " selected" : "")}
            onClick={() => this.handleSelectSeat(x, y)}
          />
        );
      }
      seat.push(
        <div className="seat-row" key={x}>
          {col}
        </div>
      );
    }
    let box = [];
    for (let p = 0; p < 2; p++) {
      let colbox = [];
      for (let q = 0; q < 12; q++) {
        // "R"+x+"C"+y -> 1+4 =R1C4
        // selected array loop , check R1C4

        let id = "R" + p + "C" + q;
        let isSelected = false;

        for (let i = 0; i < this.state.showBox.length; i++) {
          if (id === this.state.showBox[i]) {
            isSelected = true;
          }
        }

        colbox.push(
          <MdEventSeat
            className={"icon-seat" + (isSelected === true ? " selected" : "")}
            onClick={() => this.handleSelectBox(p, q)}
          />
        );
      }
      box.push(
        <div className="seat-row" key={p}>
          {colbox}
        </div>
      );
    }
    return (
      <div className="date-time-select">
        <Row>
          <Col xs={7} className="select-date-column1">
            <h1 className="h1">Select Date</h1>
            <Carousel breakPoints={this.breakPoints} className="select-month">
              {dates.map((now, index) => {
                return (
                  <Item
                    style={{
                      backgroundColor:
                        this.state.index === now.id ? "LightSteelBlue" : "",
                    }}
                    onClick={() => {
                      {
                        this.handleClick(now);
                      }
                    }}
                    key={index}
                    className="dateitems"
                  >
                    {now.month}
                    <br />
                    {now.date}
                    <br />
                    {now.day}
                  </Item>
                );
              })}
            </Carousel>
            {/* display times for suitable dates of film showing */}
            {this.state.isShowntime === true ? (
              <div>
                <h1 className="h1">Select Time</h1>
                <br />
                {this.state.showtime.map((now, index) => {
                  return (
                    <div
                      style={{
                        backgroundColor:
                          this.state.index === now.idn ? "LightSteelBlue" : "",
                      }}
                      onClick={() => {
                        {
                          this.handleClickCinema(now);
                        }
                      }}
                      key={index}
                      className="containertime"
                    >
                      <div className="timee">{now.time}</div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <></>
            )}
            {this.state.isShownCinema === true ? (
              <div>
                <h1 className="h1">Select Cinema</h1>
                <br />
                {this.state.showCinema.map((now, index) => {
                  return (
                    <div
                      style={{
                        backgroundColor:
                          this.state.index === now.idnum
                            ? "LightSteelBlue"
                            : "",
                      }}
                      onClick={() => {
                        {
                          this.handleClickSeat(now);
                        }
                      }}
                      key={index}
                      className="containertime"
                    >
                      <div className="cinema">{now.cinema}</div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <></>
            )}
            {this.state.isShownseat === true ? (
              <div>
                <h1 className="h1">Select Seat</h1>
                <br />

                <div className="seat-select">
                  {seat}
                  <br />
                  {box}
                </div>
              </div>
            ) : (
              <></>
            )}
          </Col>
          <Col xs={5} className="select-date-column2">
            <img
              className="seat-image"
              src={this.state.filmInfoo.image}
              alt="poto"
            />
            <h1 className="h1-seat">Your Seats </h1>

            {this.state.isSelected === true ? (
              <div>
                <p className="countseats">
                  Regular Seats * {this.state.showSeat2.length}
                  <span className="regular-seats">
                    Rs:
                    {this.state.regularSeats}
                  </span>
                  <br /> Premium Boxes*{this.state.showBox.length}
                  <span className="box-seats">Rs:{this.state.box}</span>
                </p>
                <h2 className="total">
                  Total{" "}
                  <span>
                    Rs:
                    {this.state.total}
                  </span>
                </h2>
              </div>
            ) : (
              <></>
            )}

            <Button className="pay-Button">Continue To Pay</Button>
          </Col>
        </Row>
      </div>

      // <div lg={7} className="col-7">
      //   <h1 className="h1">Select Date</h1>
      //   <br />

      //   <Carousel breakPoints={this.breakPoints} className="select-month">
      //     {/* dates are in sampleData.js */}

      //     {dates.map((now, index) => {
      //       return (
      //         <Item
      //           style={{
      //             backgroundColor:
      //               this.state.index === now.id ? "LightSteelBlue" : "",
      //           }}
      //           onClick={() => {
      //             {
      //               this.handleClick(now);
      //             }
      //           }}
      //           key={index}
      //           className="items"
      //         >
      //           {now.month}
      //           <br />
      //           {now.date}
      //           <br />
      //           {now.day}
      //         </Item>
      //       );
      //     })}

      //     {/* <Item>1</Item>
      //         <Item>2</Item>
      //         <Item>3</Item>
      //         <Item>4</Item>
      //         <Item>5</Item>
      //         <Item>6</Item> */}
      //   </Carousel>
      //   {/* display times for suitable dates of film showing */}
      //   {this.state.isShowntime === true ? (
      //     <div>
      //       <h1 className="h1">Select Time</h1>
      //       <br />
      //       {this.state.showtime.map((now, index) => {
      //         return (
      //           <div
      //             style={{
      //               backgroundColor:
      //                 this.state.index === now.idn ? "LightSteelBlue" : "",
      //             }}
      //             onClick={() => {
      //               {
      //                 this.handleClickCinema(now);
      //               }
      //             }}
      //             key={index}
      //             className="flexcontainer"
      //           >
      //             <div className="timee">{now.time}</div>
      //           </div>
      //         );
      //       })}
      //     </div>
      //   ) : (
      //     <></>
      //   )}

      //   {this.state.isShownCinema === true ? (
      //     <div>
      //       <h1 className="h1">Select Cinema</h1>
      //       <br />
      //       {this.state.showCinema.map((now, index) => {
      //         return (
      //           <div
      //             style={{
      //               backgroundColor:
      //                 this.state.index === now.idnum ? "LightSteelBlue" : "",
      //             }}
      //             onClick={() => {
      //               {
      //                 this.handleClickSeat(now);
      //               }
      //             }}
      //             key={index}
      //             className="flexcontainer"
      //           >
      //             <div className="cinema">{now.cinema}</div>
      //           </div>
      //         );
      //       })}
      //     </div>
      //   ) : (
      //     <></>
      //   )}
      //   {this.state.isShownseat === true ? (
      //     <div>
      //       <h1 className="h1">Select Seat</h1>
      //       <br />
      //       {this.state.showSeat.map((now, index) => {
      //         return (
      //           <div key={index} className="flexcontainer1">
      //             <div className="cinema1">
      //               {now.available.map((now, index) => {
      //                 return <div key={index}>{now.a}</div>;
      //               })}
      //               <span />
      //               {now.booked.map((now, index) => {
      //                 return <div key={index}>{now.b}</div>;
      //               })}

      //               {now.soldout.map((now, index) => {
      //                 return <div key={index}>{now.s}</div>;
      //               })}

      //               {now.selected.map((now, index) => {
      //                 return <div key={index}>{now.so}</div>;
      //               })}
      //             </div>
      //           </div>
      //         );
      //       })}
      //     </div>
      //   ) : (
      //     <></>
      //   )}
      // </div>
    );
  }
}

export default selectdatetime;
