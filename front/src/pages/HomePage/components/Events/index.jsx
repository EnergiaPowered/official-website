import React, { Component } from "react";
import "./events.css";
import Event from "./event";

export class index extends Component {
  state = {
    events: [
      {
        name: "Zo2 3agalak",
        img: "https://farm8.static.flickr.com/7521/27017639092_eb12a7e0aa_b.jpg"
      },
      {
        name: "Energia Gates",
        img:
          "https://steamuserimages-a.akamaihd.net/ugc/939434973168766379/D1167147811884D24C9435D5D5C784132B412209/"
      },
      {
        name: "Filed Trips",
        img: "https://www.rogerssportinggoods.com/site/AV-70905_1.jpg"
      }
    ]
  };
  render() {
    return (
      <section className="container bg-section component-font" id="events">
        <h2 className="section-title text-center"> OUR EVENTS </h2>

        <section className="row Allevents">
          {this.state.events.map(e => (
            <div className="col-md-4 col-sm-6 HomeEvent">
              <Event key={e.name} name={e.name} img={e.img}></Event>
            </div>
          ))}
        </section>
        <div className="text-center">
          <button className="btn btn-light btn-center">See More</button>
        </div>
      </section>
    );
  }
}

export default index;
