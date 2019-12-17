// Issue !!!!
/*
render function run befor componentDidMount !!!
so i had to put this useless defult state to make it work ! 
*/

import React, { Component } from "react";
import Header from "../../Header/Header";
// import { getEvents } from "./../../../services/fakeEvents";
import Form from "./Formx";
import "./style.css";
class SingleEvent extends Component {
  state = {
    
   details:"When you feel strongly about someone, so strongly that you love them, sometimes it doesn’t always make sense in a way that’s easy to articulate. You may really care about someone, but putting those thoughts into words is hard. Love is an exciting, confusing, up and down and everything in between sort of emotion. That’s why telling someone you love them is about more than three little words, it’s about explaining how and why you feel the way you do. That’s why love paragraphs can be a great way to tell the woman you’re with how much you care about her."
  };

  componentDidMount() {
    //   get scheme
<<<<<<< HEAD
    const eventID = this.props.match.params.id;
    const events = getEvents();
    const event = events.filter(e => e._id === eventID);
    const [eventobj]=[...event]
    this.setState({ event :eventobj});
  }

  render() {
    //   get details
    const {id,title}=this.props.match.params
    
    this.setState({ id ,title });
  }

  render() {
    const { title,id } = this.state;
    return (
      <div className=" container text-center single-event">
        <Header title={title} />
        <Form id={id} />
      </div>
    );
  }
}

export default SingleEvent;
