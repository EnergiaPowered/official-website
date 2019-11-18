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
            "https://farm8.static.flickr.com/7521/27017639092_eb12a7e0aa_b.jpg",
          alt: "duck"
        },
        body: [
          { title: "Event Name", value: "Energia Gates" },
          { title: "Date", value: "9/12/2019" },
          { title: "Status", value: 1 }
        ]
      },
      {
        _id: "awfzzzzzzxaw",
        image: {
          url: "https://www.rogerssportinggoods.com/site/AV-70905_1.jpg",
          alt: "duck"
        },
        body: [
          { title: "Event Name", value: "Filed Trips" },
          { title: "Date", value: "9/10/2019" },
          { title: "Status", value: 1 }
        ]
      },
      {
        _id: "awccvvvvfaw",
        image: {
          url:
            "https://steamuserimages-a.akamaihd.net/ugc/939434973168766379/D1167147811884D24C9435D5D5C784132B412209/",
          alt: "duck"
        },
        body: [
          { title: "Event Name", value: "Filed Trips" },
          { title: "Date", value: "9/10/2019" },
          { title: "Status", value: 1 }
        ]
      },
      {
        _id: "awfkjiooaw",
        image: {
          url:
            "https://farm8.static.flickr.com/7521/27017639092_eb12a7e0aa_b.jpg",
          alt: "duck"
        },
        body: [
          { title: "Event Name", value: "Filed Trips" },
          { title: "Date", value: "9/10/2019" },
          { title: "Status", value: 0 }
        ]
      },
      {
        _id: "awfewrgwaw",
        image: {
          url:
            "https://steamuserimages-a.akamaihd.net/ugc/939434973168766379/D1167147811884D24C9435D5D5C784132B412209/",
          alt: "duck"
        },
        body: [
          { title: "Event Name", value: "Filed Trips" },
          { title: "Date", value: "9/10/2019" },
          { title: "Status", value: 0 }
        ]
      },
      {
        _id: "awr231gfaw",
        image: {
          url:
            "https://farm8.static.flickr.com/7521/27017639092_eb12a7e0aa_b.jpg",
          alt: "duck"
        },
        body: [
          { title: "Event Name", value: "Filed Trips" },
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
