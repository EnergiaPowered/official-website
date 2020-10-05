//*** to do later ***

// request data from server ...
// sort events from neer to far
// if events number is odd rearrange the card to look better

import React, { Component } from "react";
import "./index.css";
import Header from "./components/Header/Header";
import Events from "./components/Events/Events";
import Footer from "../../shared/Footer";
import { getEvents } from "./services/fakeEvents"

import { Helmet } from "react-helmet";

export default class EventsPage extends Component {
  state = {
    events: []
  }
  componentDidMount() {
    // validate data as you like
    const events = getEvents()
    this.setState({ events })
  }
  render() {
    return (
      <div id="EventsPage">
        <Helmet>
          <title>Energia Powered | Our Events</title>
        </Helmet>

        <Header title="events" />
        <Events events={this.state.events} titles={this.state.titles} />
        <Footer />
      </div>
    );
  }
}
