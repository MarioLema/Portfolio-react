import React, { Component } from "react";
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
import calculatorImage from "./images/calculator.jpg"
import linuxMintImage from "./images/linux-mint.jpg"
import PomodoroImage from "./images/pomodoro-timer.jpg"
import typhonImage from "./images/typhon.jpg"
import weatherCardsImage from "./images/weather-cards.jpg"
import 'simplebar';
import 'simplebar/dist/simplebar.min.css';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      pages: {
        intro:{
          title: "hello"
        }, 
        pomodoroClock:{
          title: "POMODORO TIMER",
          media: PomodoroImage,
          libraries: [htmlLogo,cssLogo,jsLogo,reactLogo],
          description: "text",
          pageLink: "",
          githubLink: "https://github.com/MarioLema/pomodoro-app",
        }, 
        weatherCards:{
          title: "WEATHER CARDS",
          media: weatherCardsImage,
          libraries: [htmlLogo,cssLogo,jsLogo,reactLogo],
          description: "text",
          pageLink: "",
          githubLink: "https://github.com/MarioLema/mars-react",
        }, 
        calculator:{
          title: "CALCULATOR",
          media: calculatorImage,
          libraries: [htmlLogo,cssLogo,jsLogo,reactLogo],
          description: "text",
          pageLink: "",
          githubLink: "https://github.com/MarioLema/react-calculator",
        }, 
        linuxMint:{
          title: "LINUX MINT",
          media: linuxMintImage,
          libraries: [htmlLogo,cssLogo,jsLogo],
          description: "text",
          pageLink: "",
          githubLink: "https://github.com/MarioLema/Linux-mint",
        }, 
        typhon:{
          title: "TYPHON",
          media: typhonImage,
          libraries: [htmlLogo, cssLogo, jsLogo, bootstrapLogo, jqueryLogo],
          description: "text",
          pageLink: "",
          githubLink: "https://github.com/MarioLema/Typhon",
        }, 
        coreCorrectHealth:{
          title: "CORE CORRECT HEALTH",
          media: coreCorrectImage,
          libraries: [htmlLogo, cssLogo, jsLogo, bootstrapLogo, jqueryLogo],
          description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus justo in urna condimentum condimentum. Nunc non metus erat. Vivamus a massa nibh. Aliquam tempus tempus posuere. Maecenas id vulputate augue. Proin vitae nisi ligula. Maecenas sit amet bibendum nibh. Curabitur non fermentum turpis. Praesent et varius nibh, sed dignissim ex.Nulla luctus id est sit amet commodo. Maecenas dictum rhoncus justo, quis ultrices nisi fermentum id. Fusce velit diam, tincidunt in vestibulum vehicula, pretium malesuada purus. Maecenas vehicula, nisi nec feugiat posuere, dolor sem elementum orci, ac finibus libero nulla vitae justo.",
          pageLink: "",
          githubLink: "https://github.com/MarioLema/core-correct",
        }, 
        contact:{
          title: "hello"
        }
      },
      display: 0,
      newName: "hellopp"
     };
  }
  render() {
    return (
      <div className="App">
        <div id="page-header">
          <img src={logoSub} id="logo-image" alt="" />
        </div>
        <NavigationMenu />
        <WebsitePage activePage={this.state.pages.coreCorrectHealth}/>
        <WebsitePage activePage={this.state.pages.coreCorrectHealth}/>
        <WebsitePage activePage={this.state.pages.linuxMint}/>
        <WebsitePage activePage={this.state.pages.typhon}/>
        <WebsitePage activePage={this.state.pages.pomodoroClock}/>
        <WebsitePage activePage={this.state.pages.weatherCards}/>
        <WebsitePage activePage={this.state.pages.calculator}/>
        <WebsitePage activePage={this.state.pages.coreCorrectHealth}/>
        <Footer />
        <button className="contact-button">CONTACT ME</button>
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
          <li className="list-link">Who am I</li>
          <li>
            Live Websites
            <ul>
              <li className="list-link">Core Correct Health</li>
            </ul>
          </li>
          <li>
            Mock websites
            <ul>
              <li className="list-link">Linux Mint</li>
              <li className="list-link">Typhon</li>
            </ul>
          </li>
          <li>
            Widgets
            <ul>
              <li className="list-link">Pomodoro Clock</li>
              <li className="list-link">Weather Cards</li>
              <li className="list-link">Calculator</li>
            </ul>
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
      <div className="page-container">
      <h1 className="section-title">{this.props.activePage.title}</h1>
      <div className="image-container" data-simplebar>
        <img className="web-image" src={this.props.activePage.media} alt="" />
      </div>
      <div className="description-container">
        <h3>LANGUAGES, FRAMEWORKS AND LIBRARIES</h3>
        <div className="logos-container">
        {this.props.activePage.libraries.map( (logo,index) => <img src={logo} alt="" className="logo-image" key={`logo ${index}`}/> )}
        </div>
        <p className="web-description">{this.props.activePage.description}
        </p>
        <h3>LINKS</h3>
        <div className="logos-container">
          <a href={this.props.activePage.pageLink} target="_blank" rel="noopener noreferrer">
            <img src={screenLogo} alt="" className="logo-image code-link" />
          </a>
          <a href={this.props.activePage.githubLink} target="_blank" rel="noopener noreferrer">
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
    <div>
      <a href="https://www.google.com/">
        <img src={githubLogo} alt="" className="footer-logo" />
      </a>
      <a href="https://www.google.com/">
        <img src={codepenLogo} alt="" className="footer-logo" />
      </a>
      <a href="https://www.google.com/">
        <img src={linkedinLogo} alt="" className="footer-logo" />
      </a>
    </div>
  </footer>
);

export default App;
