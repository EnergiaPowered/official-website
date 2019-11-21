import React, { useState } from "react";
import "./index.css";

const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

export default function ContactForm(props) {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [message, setMessage] = useState({ value: "", error: "" });

  function validate(field) {
    switch (field) {
      case "name":
        if (name.value === "" || name.value === " ")
          setName({
            value: name.value,
            error: "This field is required"
          });
        else {
          setName({
            value: name.value,
            error: ""
          });
          return true;
        }
        break;
      case "email":
        if (email.value === "" || email.value === " ")
          setEmail({
            value: email.value,
            error: "This field is required"
          });
        else if (!EMAIL_REGEX.test(email.value))
          setEmail({
            value: email.value,
            error: "Please enter a valid email"
          });
        else {
          setEmail({
            value: email.value,
            error: ""
          });
          return true;
        }
        break;
      case "message":
        if (message.value === "" || message.value === " ")
          setMessage({
            value: message.value,
            error: "This field is required"
          });
        else {
          setMessage({
            value: message.value,
            error: ""
          });
          return true;
        }
        break;
    }
    return false;
  }

  function validateAll() {
    let isValid = true;
    //This repetition is to avoid the default short-circuit evaluation of the logic AND
    isValid &= validate("name");
    isValid &= validate("email");
    isValid &= validate("message");
    return isValid;
  }

  function changeHandler(e) {
    name.value = e.currentTarget.name.value;
    email.value = e.currentTarget.email.value;
    message.value = e.currentTarget.message.value;
    validate(e.target.id);
  }

  return (
    <article className="bg-section" id="contact-form">
      <h2 className="section-title text-center">Leave a message</h2>
      <form
        onChange={changeHandler}
        onSubmit={e => {
          e.preventDefault();
          console.log(name, email, message);
          if (validateAll()) {
            props.onSubmit(name.value, email.value, message.value);
          }
        }}
        noValidate
      >
        <div className="flex-row-2">
          <div className="box">
            <label htmlFor="name">
              Name{" "}
              <span className="sup-span">
                <sup>*</sup>
              </span>
            </label>
            <input type="text" name="name" id="name" />
            {name.error && <p className="error-message">{name.error}</p>}
          </div>
          <div className="box">
            <label htmlFor="email">
              Email{" "}
              <span className="sup-span">
                <sup>*</sup>
              </span>
            </label>
            <input type="text" name="email" id="email" />
            {email.error && <p className="error-message">{email.error}</p>}
          </div>
          <div className="box">
            <label htmlFor="message">
              Your Message{" "}
              <span className="sup-span">
                <sup>*</sup>
              </span>
            </label>
            <textarea name="message" id="message"></textarea>
            {message.error && <p className="error-message">{message.error}</p>}
          </div>
        </div>
        <input type="submit" value="SUBMIT" />
      </form>
    </article>
  );
}
