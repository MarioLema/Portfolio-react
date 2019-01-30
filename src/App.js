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
          description: "text",
          pageLink: "",
          githubLink: "https://github.com/MarioLema/pomodoro-app",
        },
        weatherCards: {
          title: "WEATHER CARDS",
          media: weatherCardsImage,
          libraries: [htmlLogo, cssLogo, jsLogo, reactLogo],
          description: "text",
          pageLink: "",
          githubLink: "https://github.com/MarioLema/mars-react",
        },
        calculator: {
          title: "CALCULATOR",
          media: calculatorImage,
          libraries: [htmlLogo, cssLogo, jsLogo, reactLogo],
          description: "text",
          pageLink: "",
          githubLink: "https://github.com/MarioLema/react-calculator",
        },
        linuxMint: {
          title: "LINUX MINT",
          media: linuxMintImage,
          libraries: [htmlLogo, cssLogo, jsLogo],
          description: "text",
          pageLink: "",
          githubLink: "https://github.com/MarioLema/Linux-mint",
        },
        typhon: {
          title: "TYPHON",
          media: typhonImage,
          libraries: [htmlLogo, cssLogo, jsLogo, bootstrapLogo, jqueryLogo],
          description: "text",
          pageLink: "",
          githubLink: "https://github.com/MarioLema/Typhon",
        },
        coreCorrectHealth: {
          title: "CORE CORRECT HEALTH",
          media: coreCorrectImage,
          libraries: [htmlLogo, cssLogo, jsLogo, bootstrapLogo, jqueryLogo],
          description:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus justo in urna condimentum condimentum. Nunc non metus erat. Vivamus a massa nibh. Aliquam tempus tempus posuere. Maecenas id vulputate augue. Proin vitae nisi ligula. Maecenas sit amet bibendum nibh. Curabitur non fermentum turpis. Praesent et varius nibh, sed dignissim ex.Nulla luctus id est sit amet commodo. Maecenas dictum rhoncus justo, quis ultrices nisi fermentum id. Fusce velit diam, tincidunt in vestibulum vehicula, pretium malesuada purus. Maecenas vehicula, nisi nec feugiat posuere, dolor sem elementum orci, ac finibus libero nulla vitae justo.",
          pageLink: "",
          githubLink: "https://github.com/MarioLema/core-correct",
        },
        portfolio: {
          title: "portfolio page to be finished",
          media: coreCorrectImage,
          libraries: [htmlLogo, cssLogo, jsLogo, bootstrapLogo, jqueryLogo],
          description:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus justo in urna condimentum condimentum. Nunc non metus erat. Vivamus a massa nibh. Aliquam tempus tempus posuere. Maecenas id vulputate augue. Proin vitae nisi ligula. Maecenas sit amet bibendum nibh. Curabitur non fermentum turpis. Praesent et varius nibh, sed dignissim ex.Nulla luctus id est sit amet commodo. Maecenas dictum rhoncus justo, quis ultrices nisi fermentum id. Fusce velit diam, tincidunt in vestibulum vehicula, pretium malesuada purus. Maecenas vehicula, nisi nec feugiat posuere, dolor sem elementum orci, ac finibus libero nulla vitae justo.",
          pageLink: "",
          githubLink: "https://github.com/MarioLema/core-correct",
        }
      },
      display: {
        intro: {},
        contact: HIDDEN,
        coreCorrectHealth: HIDDEN,
        linuxMint: HIDDEN,
        typhon: HIDDEN,
        pomodoroClock: HIDDEN,
        weatherCards: HIDDEN,
        calculator: HIDDEN,
        portfolio: HIDDEN,
      }
    };
    this.changeDisplay = this.changeDisplay.bind(this);
  }

  changeDisplay(event, page) {
    let newState = { ...this.state };
    switch (page) {
      case "intro":
        newState.display.intro = {};
        newState.display.contact = HIDDEN;
        newState.display.coreCorrectHealth = HIDDEN;
        newState.display.linuxMint = HIDDEN;
        newState.display.typhon = HIDDEN;
        newState.display.pomodoroClock = HIDDEN;
        newState.display.weatherCards = HIDDEN;
        newState.display.calculator = HIDDEN;
        newState.display.portfolio = HIDDEN;
        break;
      case "contact":
        newState.display.intro = HIDDEN;
        newState.display.contact = {};
        newState.display.coreCorrectHealth = HIDDEN;
        newState.display.linuxMint = HIDDEN;
        newState.display.typhon = HIDDEN;
        newState.display.pomodoroClock = HIDDEN;
        newState.display.weatherCards = HIDDEN;
        newState.display.calculator = HIDDEN;
        newState.display.portfolio = HIDDEN;
        break;
      case "coreCorrect":
        newState.display.intro = HIDDEN;
        newState.display.contact = HIDDEN;
        newState.display.coreCorrectHealth = {};
        newState.display.linuxMint = HIDDEN;
        newState.display.typhon = HIDDEN;
        newState.display.pomodoroClock = HIDDEN;
        newState.display.weatherCards = HIDDEN;
        newState.display.calculator = HIDDEN;
        newState.display.portfolio = HIDDEN;
        break;
      case "linuxMint":
        newState.display.intro = HIDDEN;
        newState.display.contact = HIDDEN;
        newState.display.coreCorrectHealth = HIDDEN;
        newState.display.linuxMint = {};
        newState.display.typhon = HIDDEN;
        newState.display.pomodoroClock = HIDDEN;
        newState.display.weatherCards = HIDDEN;
        newState.display.calculator = HIDDEN;
        newState.display.portfolio = HIDDEN;
        break;
      case "typhon":
        newState.display.intro = HIDDEN;
        newState.display.contact = HIDDEN;
        newState.display.coreCorrectHealth = HIDDEN;
        newState.display.linuxMint = HIDDEN;
        newState.display.typhon = {};
        newState.display.pomodoroClock = HIDDEN;
        newState.display.weatherCards = HIDDEN;
        newState.display.calculator = HIDDEN;
        newState.display.portfolio = HIDDEN;
        break;
      case "pomodoro":
        newState.display.intro = HIDDEN;
        newState.display.contact = HIDDEN;
        newState.display.coreCorrectHealth = HIDDEN;
        newState.display.linuxMint = HIDDEN;
        newState.display.typhon = HIDDEN;
        newState.display.pomodoroClock = {};
        newState.display.weatherCards = HIDDEN;
        newState.display.calculator = HIDDEN;
        newState.display.portfolio = HIDDEN;
        break;
      case "weatherCards":
        newState.display.intro = HIDDEN;
        newState.display.contact = HIDDEN;
        newState.display.coreCorrectHealth = HIDDEN;
        newState.display.linuxMint = HIDDEN;
        newState.display.typhon = HIDDEN;
        newState.display.pomodoroClock = HIDDEN;
        newState.display.weatherCards = {};
        newState.display.calculator = HIDDEN;
        newState.display.portfolio = HIDDEN;
        break;
      case "calculator":
        newState.display.intro = HIDDEN;
        newState.display.contact = HIDDEN;
        newState.display.coreCorrectHealth = HIDDEN;
        newState.display.linuxMint = HIDDEN;
        newState.display.typhon = HIDDEN;
        newState.display.pomodoroClock = HIDDEN;
        newState.display.weatherCards = HIDDEN;
        newState.display.calculator = {};
        newState.display.portfolio = HIDDEN;
        break;
      case "portfolio":
        newState.display.intro = HIDDEN;
        newState.display.contact = HIDDEN;
        newState.display.coreCorrectHealth = HIDDEN;
        newState.display.linuxMint = HIDDEN;
        newState.display.typhon = HIDDEN;
        newState.display.pomodoroClock = HIDDEN;
        newState.display.weatherCards = HIDDEN;
        newState.display.calculator = HIDDEN;
        newState.display.portfolio = {};
        break;
      default:
        newState.display.intro = {};
        newState.display.contact = HIDDEN;
        newState.display.coreCorrectHealth = HIDDEN;
        newState.display.linuxMint = HIDDEN;
        newState.display.typhon = HIDDEN;
        newState.display.pomodoroClock = HIDDEN;
        newState.display.weatherCards = HIDDEN;
        newState.display.calculator = HIDDEN;
        newState.display.portfolio = HIDDEN;
    }
    this.setState(() => newState);
  }


  render() {
    return (
      <div className="App">
        <Animation />
        <div id="page-header">
          <img src={logoSub} id="logo-image" alt="" />
        </div>
        <NavigationMenu changeDisplay={this.changeDisplay}/>
        <AboutMe activePage={this.state.pages.intro} style={this.state.display.intro}/>
        <WebsitePage activePage={this.state.pages.coreCorrectHealth} style={this.state.display.coreCorrectHealth}/>
        <WebsitePage activePage={this.state.pages.linuxMint} style={this.state.display.linuxMint}/>
        <WebsitePage activePage={this.state.pages.typhon} style={this.state.display.typhon}/>
        <WebsitePage activePage={this.state.pages.pomodoroClock} style={this.state.display.pomodoroClock}/>
        <WebsitePage activePage={this.state.pages.weatherCards} style={this.state.display.weatherCards}/>
        <WebsitePage activePage={this.state.pages.calculator} style={this.state.display.calculator}/>
        <WebsitePage activePage={this.state.pages.portfolio} style={this.state.display.portfolio}/>
        <ContactForm activePage={this.state.pages.contact} style={this.state.display.contact}/>
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
                key={`logo ${index}`}
              />
            ))}
          </div>
          <p className="web-description">{this.props.activePage.description}</p>
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            luctus justo in urna condimentum condimentum. Nunc non metus erat.
            Vivamus a massa nibh. Aliquam tempus tempus posuere. Maecenas id
            vulputate augue. Proin vitae nisi ligula. Maecenas sit amet bibendum
            nibh. Curabitur non fermentum turpis. Praesent et varius nibh, sed
            dignissim ex.Nulla luctus id est sit amet commodo. Maecenas dictum
            rhoncus justo, quis ultrices nisi fermentum id. Fusce velit diam,
            tincidunt in vestibulum vehicula, pretium malesuada purus. Maecenas
            vehicula, nisi nec feugiat posuere, dolor sem elementum orci, ac
            finibus libero nulla vitae justo.
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
        <form
          className="contact-form"
          action="https://formspree.io/lema_mario@yahoo.com"
          method="POST"
          id="form"
        >
          <h2>CONTACT ME</h2>
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
        <div className="social-container">
          <h2>MY SOCIAL PROFILES</h2>
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
