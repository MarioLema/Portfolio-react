import React, { Component } from "react";

// IMPORT COMPONENTS
import Animation from "./animation";
import NavigationMenu from "./nav-menu";
import WebsitePage from "./page-component";
import ContactForm from "./contact-section";
import AboutMe from "./intro";
// IMPORT LOGOS
import logoSub from "./images/logo-with-sub.png";
import htmlLogo from "./images/html-logo.png";
import cssLogo from "./images/css-logo.png";
import jsLogo from "./images/js-logo.png";
import bootstrapLogo from "./images/bootstrap-logo.png";
import jqueryLogo from "./images/jquery-logo.png";
import reactLogo from "./images/react-logo.png";
import sassLogo from "./images/sass-logo.png";
import mail from "./images/mail.svg";
//IMPORT WEBSITE IMAGES
import coreCorrectImage from "./images/core-correct-sizes.png";
import calculatorImage from "./images/calculator-sizes.png";
import linuxMintImage from "./images/linux-mint-sizes.png";
import PomodoroImage from "./images/pomodoro-sizes.png";
import typhonImage from "./images/typhon-sizes.png";
import portfolioImage from "./images/portfolio-sizes.png";
import weatherCardsImage from "./images/weather-cards-sizes.png";
import freshAirImage from "./images/fresh-air-sizes.png";
//IMPORT CSS FILES
import "./scss/app.scss";

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
            "Have a go at the clock and reload the page to see the background palette change!"
          ],
          pageLink: "https://mariolema.github.io/pomodoro-app/",
          githubLink: "https://github.com/MarioLema/pomodoro-app"
        },
        weatherCards: {
          title: "WEATHER CARDS",
          media: weatherCardsImage,
          libraries: [htmlLogo, cssLogo, jsLogo, reactLogo],
          description: [
            "These 4 animated weather cards feature the local weather, the weather in Tokyo and New York City as well as the weather in Mars.",
            "3 of the cards use the same geolocation API. For the Mars weather card, an API provided by the NASA in combination with the CSIC-INTA relays the data found by the Mars Rover Curiosity. The Curiosity contains a series of environmental sensors known REMS that collect the weather data in Mars.",
            "The cards have individual animations with sunsets and meteor showers that activate when you hover your mouse over them."
          ],
          pageLink: "https://mariolema.github.io/mars-react/",
          githubLink: "https://github.com/MarioLema/mars-react"
        },
        calculator: {
          title: "CALCULATOR",
          media: calculatorImage,
          libraries: [htmlLogo, cssLogo, jsLogo, reactLogo],
          description: [
            "A simple calculator widget built with React. It can be overlapped into any website."
          ],
          pageLink: "https://mariolema.github.io/react-calculator/",
          githubLink: "https://github.com/MarioLema/react-calculator"
        },
        linuxMint: {
          title: "LINUX MINT",
          media: linuxMintImage,
          libraries: [htmlLogo, cssLogo, jsLogo, sassLogo],
          description: [
            "This mock website is inspired by the Linux Mint Cinnamon Desktop own website. It is intended to continue with the new style and revamp a now outdated look in the actual Linux Mint OS website.",
            "It is constructed without any libraries and only taking advantage of CSS flexbox and CSS grid to achieve responsiveness across devices."
          ],
          pageLink: "https://mariolema.github.io/Linux-mint/",
          githubLink: "https://github.com/MarioLema/Linux-mint"
        },
        typhon: {
          title: "TYPHON",
          media: typhonImage,
          libraries: [htmlLogo, cssLogo, jsLogo, bootstrapLogo, jqueryLogo],
          description: [
            "This responsive front-page is a mock design for a fictional gaming computers and accessories website.",
            "Created with Bootstrap and Jquery. It has an original logo design, as well as artwork on the slider, and it plays with CSS transitions to offer an interactive experience."
          ],
          pageLink: "https://mariolema.github.io/Typhon/",
          githubLink: "https://github.com/MarioLema/Typhon"
        },
        coreCorrectHealth: {
          title: "CORE CORRECT HEALTH",
          media: coreCorrectImage,
          libraries: [htmlLogo, cssLogo, jsLogo, bootstrapLogo, jqueryLogo],
          description: [
            "This page was commissioned by local Osteopath and dance trainer Kevin Woods.",
            "It is a complete redesign of his former website. Built through Wordpress and using Bootstrap and Jquery the multiple pages were merged into one single page for ease of access.",
            "The logo is also a completely new design."
          ],
          pageLink: "http://core-correct.com/",
          githubLink: "https://github.com/MarioLema/core-correct"
        },
        portfolio: {
          title: "PORTFOLIO",
          media: portfolioImage,
          libraries: [htmlLogo, cssLogo, jsLogo, sassLogo, reactLogo],
          description: [
            "The portfolio itself has been built with React. It is meant to be a one page fitting the entire browser window and that will change its display upon clicking on the different section handlers.",
            "It welcomes visitors with a custom made animation built through an SVG object and a series of different keyframes with different delay times.",
            "Both the animation and page are meant to be entirely responsive without using any bootstrap of jquery.",
          ],
          pageLink: "https://mariolema.github.io/",
          githubLink: "https://github.com/MarioLema/core-correct"
        },
        freshAir: {
          title: "FRESH AIR",
          media: freshAirImage,
          libraries: [htmlLogo, cssLogo, bootstrapLogo, sassLogo],
          description: [
            "This mock design showcases modern CSS technologies without any (almost) javascript. This is a redesign of an original page created by Jonas Schmedtmann. It has been rebranded and rebuilt with Bootstrap 4."
          ],
          pageLink: "https://mariolema.github.io/Oxygen/",
          githubLink: "https://github.com/MarioLema/Oxygen"
        },
      },
      // DISPLAY HANDLE OF DIFFERENT PAGES
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
        freshAir: HIDDEN,
        animation: {}
      },
      currentDisplay: "intro"
    };
    this.changeDisplay = this.changeDisplay.bind(this);
  }
  // CHANGES THE PAGES TO ACTIVELY DISPLAY THEM AND HIDES THE LAST ACTIVE ONE
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
        <Animation display={this.state.display.animation} />
        <div className="page-header">
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
        activePage={this.state.pages.freshAir}
        style={this.state.display.freshAir}
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
          <span>CONTACT ME</span>
          <img className="contact-button__icon" src={mail} alt=""></img>
        </button>
      </div>
    );
  }
}

/*=========================FOOTER============================================= */
const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
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
export default App;