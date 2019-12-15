import React, { Component } from "react";
import "./index.css";
import Header from "./components/Header/Header";
import Events from "./components/Events/Events";
import Footer from "../../components/Footer";

export default class EventsPage extends Component {
  state = {
    events: [
      {
        _id: "awfiwuerqherygfiaw",
        image: {
          url: "http://via.placeholder.com/640x360",
          alt: "duck"
        },
        body: [
          { title: " Name", value: "Energia Gates" },
          { title: "Date", value: "9/12/2019" },
          { title: "Status", value: 1 }
        ]
      },
      {
        _id: "awfzzzzzzxaw",
        image: {
          url: "http://via.placeholder.com/640x360",
          alt: "duck"
        },
        body: [
          { title: " Name", value: "Filed Trips" },
          { title: "Date", value: "9/10/2019" },
          { title: "Status", value: 1 }
        ]
      },
      {
        _id: "awccvvvvfaw",
        image: {
          url: "http://via.placeholder.com/640x360",
          alt: "duck"
        },
        body: [
          { title: " Name", value: "Filed Trips" },
          { title: "Date", value: "9/10/2019" },
          { title: "Status", value: 1 }
        ]
      },
      {
        _id: "awfkjiooaw",
        image: {
          url: "http://via.placeholder.com/640x360",
          alt: "duck"
        },
        body: [
          { title: " Name", value: "Filed Trips" },
          { title: "Date", value: "9/10/2019" },
          { title: "Status", value: 0 }
        ]
      },
      {
        _id: "awfewrgwaw",
        image: {
          url: "http://via.placeholder.com/640x360",
          alt: "duck"
        },
        body: [
          { title: " Name", value: "Filed Trips" },
          { title: "Date", value: "9/10/2019" },
          { title: "Status", value: 0 }
        ]
      },
      {
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
    ]
  };
  render() {
    return (
      <div id="EventsPage">
        <Header />
        <Events events={this.state.events} titles={this.state.titles} />
        <Footer />
      </div>
    );
  }
}
