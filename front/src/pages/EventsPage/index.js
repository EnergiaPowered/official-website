//*** to do later ***

// request data from server ...
// sort events from neer to far
// if events number is odd rearrange the card to look better

import React, { Component } from "react";
import "./index.css";
import Header from "./components/Header/Header";
import Events from "./components/Events/Events";
import Footer from "../../components/Footer";
import {getEvents} from "./services/fakeEvents"

export default class EventsPage extends Component {
  state = {
    events:[]
  }
  componentDidMount() {
    // validate data as you like
    const events =getEvents()
    this.setState({events})
  }
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
