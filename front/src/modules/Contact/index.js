import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import Header from "./components/Header";
import Info from "./components/Info";
import ContactForm from "./components/ContactForm";

import Layout from "shared/Layout";

import { sendMessage } from "./services/contact.service";

import "./style.css";

import bg from "assets/Contact-header.png";

export default function Contacts(props) {
  // Sending messages to the backend
  function submitHandler(name, email, message) {
    sendMessage({ name, email, message })
      .then(() => alert("Sent Successfully!"))
      .catch(err => alert("There was an error. Please try again later" + err));
  }

  let style = {
    backgroundImage: `url(${bg})`
  };

  const [info, setInfo] = useState(null);
  useEffect(() => {
    app
      .get("http://localhost:4000/contactInfo")
      .then(res => {
        setInfo(res.data);
      })
      .catch(err => {
        console.log("Couldn't connect to server", err);
      });
  }, []);

  return (
    <div className="page-component component-font" id="Contacts" style={style}>
      <Helmet>
        <title>Energia Powered | Contact</title>
      </Helmet>
      <Layout>
        <Header />
        <Info
          address={info ? info.address : null}
          email={info ? info.email : null}
          phone={info ? info.phone : null}
          image={info ? info.image : null}
        />
        <ContactForm onSubmit={submitHandler} />
      </Layout>
    </div>
  );
}
