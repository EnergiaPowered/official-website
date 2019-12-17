// Issue !!!!
/*
render function run befor componentDidMount !!!
so i had to put this useless defult state to make it work ! 
*/

import React, { Component } from "react";
import Header from "../../Header/Header"
import { getEvents } from "./../../../services/fakeEvents";
import Form from "./Formx"
import "./style.css"
class SingleEvent extends Component {
  state = { event:{
    _id: "awr231gfaw",
    image: {
      url: "http://via.placeholder.com/640x360",
      alt: "duck"
    },
    body: [
      { title: " Name", value: "Filed Trips" },
      { title: "Date", value: "9/10/2019" },
      { title: "Status", value: 1 }
    ]
  }
 };

  componentDidMount() {
    //   get scheme
    const eventID = this.props.match.params.id;
    const events = getEvents();
    const event = events.filter(e => e._id === eventID);
    const [eventobj]=[...event]
    this.setState({ event :eventobj});
  }

  render() {
    const { event } = this.state;
    return (
      <div className=" container text-center single-event">
        <Header title={event.body[0].value}/>
        <Form/>
      </div>

    );
  }
}

export default SingleEvent;
