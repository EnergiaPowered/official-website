import React, { useEffect, useState } from "react";
import app from "axios";
import { Helmet } from "react-helmet";
import Header from './components/Header'
import Info from "./components/Info";
import ContactForm from "./components/ContactForm";
import Footer from "../../components/Footer";
import "./index.css";

export default function Contacts(props) {
    // Sending messages to the backend
    function submitHandler(name, email, message) {
        app.post("http://localhost:4000/message", {
            name: name,
            email: email,
            message: message
        })
            .then(() => alert("Sent Successfully!"))
            .catch(err =>
                alert("There was an error. Please try again later" + err)
            );
    }

    // Retrieving contactInfo from the backend when the component mounts
    const [info, setInfo] = useState(null);
    useEffect(() => {
        app.get("http://localhost:4000/contactInfo")
            .then(res => {
                setInfo(res.data);
            })
            .catch(err => {
                console.log("Couldn't connect to server", err);
            });
    }, []);

    return (
        <div className="page-component component-font" id="Contacts">
            <Helmet>
                <title>Energia Powered | Contacts</title>
            </Helmet>
            <Header />
            <Info
                address={info ? info.address : null}
                email={info ? info.email : null}
                phone={info ? info.phone : null}
                image={info ? info.image : null}
            />
            <ContactForm onSubmit={submitHandler} />
            <Footer />
        </div>
    );
}
