import React, { Component } from "react";
import githubLogo from "./images/github-logo.png";
import codepenLogo from "./images/codepen-logo.svg";
import linkedinLogo from "./images/linkedin-logo.svg";

/*=========================FORM============================================= */
class ContactForm extends Component {
  render() {
    return (
      <div className="contact-container" style={this.props.style}>
        <h2>CONTACT ME</h2>
        <form
          className="contact-form"
          action="https://formspree.io/lema_mario@yahoo.com"
          method="POST"
          id="form"
        >
          {/* NAME FIELD CONTAINER */}
          <div className="form-group" id="name-field">
            <label className="control-label" htmlFor="nameinput">
              Name
              <br />
            </label>
            <input
              id="nameinput"
              name="nameinput"
              className="form-control input-md"
              type="text"
              placeholder="Name"
              required
            />
          </div>
          {/* PHONE NUMBER CONTAINER */}
          <div className="form-group" id="phone-field">
            <label className=" control-label" htmlFor="phoneinput">
              Phone Number
              <br />
            </label>
            <div>
              <input
                id="phoneinput"
                name="phoneinput"
                className="form-control input-md"
                type="tel"
                placeholder="Phone number"
              />
            </div>
          </div>
          {/* EMAIL CONTAINER */}
          <div className="form-group" id="email-field">
            <label className=" control-label" htmlFor="emailinput">
              Email Address
              <br />
            </label>
            <input
              id="emailinput"
              name="emailinput"
              className="form-control input-md"
              type="email"
              placeholder="Email address"
              required
            />
          </div>
          {/* TEXT MESSAGE CONTAINER */}
          <div className="form-group" id="message-field">
            <label className=" control-label" htmlFor="textarea">
              Message
            </label>
            <div>
              <textarea
                rows="8"
                cols="50"
                className="form-control"
                id="textarea"
                name="textarea"
                type="text"
                placeholder="Your message..."
              />
            </div>
          </div>
          {/* SUBMIT BUTTON */}
          <div className="form-group" id="submit-button">
            <div>
              <button className="submit-button" name="button1id">
                SUBMIT
              </button>
            </div>
          </div>
        </form>
        {/*============================= SOCIAL PROFILES SECTION =========================== */}
        <h2>MY SOCIAL PROFILES</h2>
        <div className="social-container">
          <a
            className="social-link"
            href="https://github.com/MarioLema/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubLogo} alt="" className="footer-logo" /> GITHUB
          </a>
          <a
            className="social-link"
            href="https://codepen.io/Ubim28/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={codepenLogo} alt="" className="footer-logo" /> CODEPEN
          </a>
          <a
            className="social-link"
            href="https://www.linkedin.com/in/mario-lema-221036a3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinLogo} alt="" className="footer-logo" /> LINKEDIN
          </a>
        </div>
      </div>
    );
  }
}

export default ContactForm;
