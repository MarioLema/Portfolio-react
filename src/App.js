import React, { Component } from "react";
import Animation from "./animation";
import logoSub from "./images/logo-with-sub.svg";
import htmlLogo from "./images/html-logo.png";
import cssLogo from "./images/css-logo.png";
import jsLogo from "./images/js-logo.png";
import bootstrapLogo from "./images/bootstrap-logo.png";
import jqueryLogo from "./images/jquery-logo.png";
import reactLogo from "./images/react-logo.png";
import screenLogo from "./images/screen-logo.png";
import githubLogo from "./images/github-logo.png";
import codepenLogo from "./images/codepen-logo.svg";
import linkedinLogo from "./images/linkedin-logo.svg";
import coreCorrectImage from "./images/core-correct.jpg";
import calculatorImage from "./images/calculator.jpg";
import linuxMintImage from "./images/linux-mint.jpg";
import PomodoroImage from "./images/pomodoro-timer.jpg";
import typhonImage from "./images/typhon.jpg";
import weatherCardsImage from "./images/weather-cards.jpg";
import aboutImage from "./images/portrait-drawing.svg";
import "simplebar";
import "simplebar/dist/simplebar.min.css";
import "./App.css";

const HIDDEN = { display: "none" };
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: {
        pomodoroClock: {
          title: "POMODORO TIMER",
          media: PomodoroImage,
          libraries: [htmlLogo, cssLogo, jsLogo, reactLogo],
          description: [
            "A classic Pomodoro clock built with React. It features an animated background with a selection of colour palettes.",
            "The page takes advantage of the CSS grid feature and both the clock and background have been constructed exploiting this feature.",
            "Have a go at the clock and reload the page to see the background palette change!",
          ],
          pageLink: "",
          githubLink: "https://github.com/MarioLema/pomodoro-app"
        },
        weatherCards: {
          title: "WEATHER CARDS",
          media: weatherCardsImage,
          libraries: [htmlLogo, cssLogo, jsLogo, reactLogo],
          description:[
"These 4 animated weather cards feature the local weather, the weather in Tokyo and New York City as well as the weather in Mars.",
"3 of the cards use the same geolocation API. For the Mars weather card, an API provided by the NASA in combination with the CSIC-INTA relays the data found by the Mars Rover Curiosity. The Curiosity contains a series of environmental sensors known REMS that collect the weather data in Mars.",
"The cards have individual animations with sunsets and meteor showers that activate when you hover your mouse over them.",
          ],
          pageLink: "",
          githubLink: "https://github.com/MarioLema/mars-react"
        },
        calculator: {
          title: "CALCULATOR",
          media: calculatorImage,
          libraries: [htmlLogo, cssLogo, jsLogo, reactLogo],
          description:["A simple calculator widget built with React. It can be overlapped into any website."],
          pageLink: "",
          githubLink: "https://github.com/MarioLema/react-calculator"
        },
        linuxMint: {
          title: "LINUX MINT",
          media: linuxMintImage,
          libraries: [htmlLogo, cssLogo, jsLogo],
          description:[
            "This mock website is inspired by the Linux Mint Cinnamon Desktop own website. It is intended to continue with the new style and revamp a now outdated look in the actual Linux Mint OS website.",
            "It is constructed without any libraries and only taking advantage of CSS flexbox and CSS grid to achieve responsiveness across devices.",
          ],
          pageLink: "",
          githubLink: "https://github.com/MarioLema/Linux-mint"
        },
        typhon: {
          title: "TYPHON",
          media: typhonImage,
          libraries: [htmlLogo, cssLogo, jsLogo, bootstrapLogo, jqueryLogo],
          description:[
            "This responsive front-page is a mock design for a fictional gaming computers and accessories website.",
            "Created with Bootstrap and Jquery. It has an original logo design, as well as artwork on the slider, and it plays with CSS transitions to offer an interactive experience.",
          ],
          pageLink: "",
          githubLink: "https://github.com/MarioLema/Typhon"
        },
        coreCorrectHealth: {
          title: "CORE CORRECT HEALTH",
          media: coreCorrectImage,
          libraries: [htmlLogo, cssLogo, jsLogo, bootstrapLogo, jqueryLogo],
          description:[
            "This page was commissioned by local Osteopath and dance trainer Kevin Woods.",
            "It is a complete redesign of his former website. Built through Wordpress and using Bootstrap and Jquery the multiple pages were merged into one single page for ease of access.",
            "The logo is also a completely new design.",
          ],
          pageLink: "",
          githubLink: "https://github.com/MarioLema/core-correct"
        },
        portfolio: {
          title: "portfolio page to be finished",
          media: coreCorrectImage,
          libraries: [htmlLogo, cssLogo, jsLogo, bootstrapLogo, jqueryLogo],
          description:[
            "The portfolio itself has been built with React. It is meant to be a one page fitting the entire browser window and that will change its display upon clicking on the different section handlers.",
            "It welcomes visitors with a custom made animation built through an SVG object and a series of different keyframes with different delay times.",
            "Both the animation and page are meant to be entirely responsive without using any bootstrap of jquery.",
            "The page is inspired by grid blueprints as a nod to the CSS Grid feature."
          ],
          pageLink: "",
          githubLink: "https://github.com/MarioLema/core-correct"
        }
      },
      display: {
        intro: {},
        contact: HIDDEN,
        coreCorrect: HIDDEN,
        linuxMint: HIDDEN,
        typhon: HIDDEN,
        pomodoro: HIDDEN,
        weatherCards: HIDDEN,
        calculator: HIDDEN,
        portfolio: HIDDEN,
        animation: {},
      },
      currentDisplay: "intro"
    };
    this.changeDisplay = this.changeDisplay.bind(this);
  }

  changeDisplay(event, page) {
    let newState = { ...this.state };
    newState.display[newState.currentDisplay] = HIDDEN;
    newState.display[page] = {};
    newState.currentDisplay = page;
    this.setState(() => newState);
  }

  render() {
    return (
      <div className="App">
        <Animation display={this.state.display.animation}/>
        <div id="page-header">
          <img src={logoSub} id="logo-image" alt="" />
        </div>
        <NavigationMenu changeDisplay={this.changeDisplay} />
        <AboutMe
          activePage={this.state.pages.intro}
          style={this.state.display.intro}
        />
        <WebsitePage
          activePage={this.state.pages.coreCorrectHealth}
          style={this.state.display.coreCorrect}
        />
        <WebsitePage
          activePage={this.state.pages.linuxMint}
          style={this.state.display.linuxMint}
        />
        <WebsitePage
          activePage={this.state.pages.typhon}
          style={this.state.display.typhon}
        />
        <WebsitePage
          activePage={this.state.pages.pomodoroClock}
          style={this.state.display.pomodoro}
        />
        <WebsitePage
          activePage={this.state.pages.weatherCards}
          style={this.state.display.weatherCards}
        />
        <WebsitePage
          activePage={this.state.pages.calculator}
          style={this.state.display.calculator}
        />
        <WebsitePage
          activePage={this.state.pages.portfolio}
          style={this.state.display.portfolio}
        />
        <ContactForm
          activePage={this.state.pages.contact}
          style={this.state.display.contact}
        />
        <Footer />
        <button
          className="contact-button"
          onClick={event => this.changeDisplay(event, "contact")}
        >
          CONTACT ME
        </button>
      </div>
    );
  }
}

/*=========================NAVIGATION MENU============================================= */

class NavigationMenu extends App {
  render() {
    return (
      <nav>
        <ul className="menu-list">
          <li
            className="list-link"
            onClick={event => this.props.changeDisplay(event, "intro")}
          >
            who am I
          </li>
          <li
            className="list-link"
            onClick={event => this.props.changeDisplay(event, "coreCorrect")}
          >
            Core Correct Health
          </li>
          <li
            className="list-link"
            onClick={event => this.props.changeDisplay(event, "linuxMint")}
          >
            Linux Mint
          </li>
          <li
            className="list-link"
            onClick={event => this.props.changeDisplay(event, "typhon")}
          >
            Typhon
          </li>
          <li
            className="list-link"
            onClick={event => this.props.changeDisplay(event, "pomodoro")}
          >
            Pomodoro Clock
          </li>
          <li
            className="list-link"
            onClick={event => this.props.changeDisplay(event, "weatherCards")}
          >
            Weather Cards
          </li>
          <li
            className="list-link"
            onClick={event => this.props.changeDisplay(event, "calculator")}
          >
            Calculator
          </li>
          <li
            className="list-link"
            onClick={event => this.props.changeDisplay(event, "portfolio")}
          >
            Portfolio
          </li>
        </ul>
      </nav>
    );
  }
}
/*=========================WEBSITE PAGE============================================= */
class WebsitePage extends App {
  render() {
    return (
      <div className="page-container" style={this.props.style}>
        <h1 className="section-title">{this.props.activePage.title}</h1>
        <div className="image-container" data-simplebar>
          <img className="web-image" src={this.props.activePage.media} alt="" />
        </div>
        <div className="description-container">
          <h3>LANGUAGES, FRAMEWORKS AND LIBRARIES</h3>
          <div className="logos-container">
            {this.props.activePage.libraries.map((logo, index) => (
              <img
                src={logo}
                alt=""
                className="logo-image"
                key={`logo${index}`}
              />
            ))}
          </div>
          <div className="web-description">
          {this.props.activePage.description.map((paragraph, index) => (<p key={`para${index}`}>{paragraph}</p>))}
          </div>
          <h3>LINKS</h3>
          <div className="logos-container">
            <a
              href={this.props.activePage.pageLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={screenLogo} alt="" className="logo-image code-link" />
            </a>
            <a
              href={this.props.activePage.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubLogo} alt="" className="logo-image code-link" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
/*=========================FOOTER============================================= */
const Footer = () => (
  <footer>
    <div>
      <span>
        This work is licensed under a Creative Commons International License
      </span>
      <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">
        <img
          alt="Creative Commons License"
          style={{ borderWidth: 0, marginLeft: 1 + "em" }}
          src="https://i.creativecommons.org/l/by-nc-nd/4.0/80x15.png"
        />
      </a>
    </div>
  </footer>
);
/*=========================ABOUT ME SECTION============================================= */
class AboutMe extends App {
  render() {
    return (
      <div className="about-me" style={this.props.style}>
        <img src={aboutImage} alt="" className="about-image" />
        <div className="about-text-container">
          <span>HI!</span>
          <br />
          <p>I'm Mario, a Front End Developer based in London, UK.</p>
          <p>
            I have recently found my passion for coding and building great
            websites. Although any challenge excites me I am particularly fond
            of custom made animations. I have been working with React as of late
            but hoping to diversify my knowledge into other frameworks as well.
          </p>
          <p>
            Here you will find some of my work and if you wish to contact me or
            see more of my code click on the top right corner.
          </p>
          <p>
            My background is in Hospitality, having been a manager for several
            years. Through my time in a customer-oriented business I have learnt
            plenty of skills and tools to provide excellent work and service.
          </p>
          <p>
            I am committed to delivering an excellent product fit to a client's
            demands.
          </p>
        </div>
      </div>
    );
  }
}
/*=========================FORM============================================= */
class ContactForm extends App {
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

          <div className="form-group" id="submit-button">
            <div>
              <button className="submit-button" name="button1id">
                SUBMIT
              </button>
            </div>
          </div>
        </form>
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

export default App;
