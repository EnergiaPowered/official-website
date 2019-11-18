import React, { Component } from "react";
import "./index.css";
import Header from "./components/Header/Header";
import Events from "./components/Events/Events";
import Footer from "../../components/Footer/index";
export class index extends Component {
  state = {
    events: [
      {
        _id: "awfiwuerqherygfiaw",
        image: {
          url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3YBdpAkCVCXmzugeziR8HyzxDaAdjl3TT41Ao_AdxAm7wT9lBxw&s",
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
          url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3YBdpAkCVCXmzugeziR8HyzxDaAdjl3TT41Ao_AdxAm7wT9lBxw&s",
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
          url: "http://eskipaper.com/images/baby-duck-wallpaper-2.jpg",
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
          url: "http://eskipaper.com/images/baby-duck-wallpaper-2.jpg",
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
          url: "http://eskipaper.com/images/baby-duck-wallpaper-2.jpg",
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
          url: "http://eskipaper.com/images/baby-duck-wallpaper-2.jpg",
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

export default index;
