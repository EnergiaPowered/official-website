import React, { useEffect, useState } from "react";
import Info from "./Info"
import ContactForm from "./ContactForm"
import Footer from "../HomePage/Footer"
import "./style.css";

export default function Contacts(props) {
    function submitHandler(name, email, message) {
        console.log(`{
            name: ${name},
            email: ${email},
            message: ${message}
        }`);
    }
    return (
        <div id="Contacts">
            <header>
                <h1>Contact Info</h1>
            </header>
            <Info />
            <ContactForm onSubmit={submitHandler}/>
            <Footer/>
        </div>
    );
}