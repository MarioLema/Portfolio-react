import React, { Component } from "react";
import logoSub from "./images/logo-with-sub.svg";
import menuButton from "./images/menu-button.svg";
import htmlLogo from "./images/html-logo.png";
import cssLogo from "./images/css-logo.png";
import jsLogo from "./images/js-logo.png";
import bootstrapLogo from "./images/bootstrap-logo.png";
import jqueryLogo from "./images/jquery-logo.png";
import reactLogo from "./images/react-logo.png";
import screenLogo from "./images/screen-logo.png";
import githubLogo from "./images/github-logo.png";
import webImage from "./images/website frame-grid.svg";
import codepenLogo from "./images/codepen-logo.svg";
import linkedinLogo from "./images/linkedin-logo.svg";
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
          title: "Pomodoro Clock",
          media: "",
          libraries: [],
          description: "",
          pageLink: "",
          githubLink: "",
        }, 
        weatherCards:{
          title: "Weather Cards",
          media: "",
          libraries: [],
          description: "",
          pageLink: "",
          githubLink: "",
        }, 
        calculator:{
          title: "Calculator",
          media: "",
          libraries: [],
          description: "",
          pageLink: "",
          githubLink: "",
        }, 
        linuxMint:{
          title: "Linux Mint",
          media: "",
          libraries: [],
          description: "",
          pageLink: "",
          githubLink: "",
        }, 
        typhon:{
          title: "Typhon",
          media: "",
          libraries: [],
          description: "",
          pageLink: "",
          githubLink: "",
        }, 
        coreCorrectHealth:{
          title: "Core Correct Health",
          media: "",
          libraries: [],
          description: "",
          pageLink: "",
          githubLink: "",
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
        <WebsiteTitle name={this.state.newName}/>
        <WebsiteImage />
        <WebsitePage />
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
        <img className="menu-button" src={menuButton} alt="" />
        <ul className="menu-list">
          <li className="list-link">Who am I</li>
          <li>
            Widgets
            <ul>
              <li className="list-link">▬ Pomodoro Clock</li>
              <li className="list-link">▬ Weather Cards</li>
              <li className="list-link">▬ Calculator</li>
            </ul>
          </li>
          <li>
            Mock websites
            <ul>
              <li className="list-link">▬ Linux Mint</li>
              <li className="list-link">▬ Typhon</li>
            </ul>
          </li>
          <li>
            Published Websites
            <ul>
              <li className="list-link">▬ Core Correct Health</li>
            </ul>
          </li>
          <li className="list-link">Contact Me</li>
        </ul>
      </nav>
    );
  }
}
/*=========================WEBSITE TITLE============================================= */
class WebsiteTitle extends Component {
  render() {
    return <h1 className="section-title">{this.props.name}</h1>;
  }
}
/*=========================WEBSITE IMAGE============================================= */
class WebsiteImage extends App {
  render() {
    return (
      <div className="image-container">
        <img className="web-image" src={webImage} alt="" />
      </div>
    );
  }
}
/*=========================WEBSITE PAGE============================================= */
class WebsitePage extends App {
  render() {
    return (
      <div className="description-container">
        <h3>LANGUAGES, FRAMEWORKS AND LIBRARIES</h3>
        <div className="logos-container">
          <img src={htmlLogo} alt="" className="logo-image" />
          <img src={cssLogo} alt="" className="logo-image" />
          <img src={jsLogo} alt="" className="logo-image" />
          <img src={bootstrapLogo} alt="" className="logo-image" />
          <img src={jqueryLogo} alt="" className="logo-image" />
          <img src={reactLogo} alt="" className="logo-image" />
        </div>
        <h3>DESCRIPTION</h3>
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
          finibus libero nulla vitae justo. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Nulla varius
          mauris quis ullamcorper porta. Curabitur vestibulum urna quis mauris
          fermentum, quis posuere eros iaculis. Praesent lacus nunc, gravida
          quis maximus quis, imperdiet at tortor. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Suspendisse sit amet commodo libero.
        </p>
        <h3>LINKS</h3>
        <div className="logos-container">
          <a href="https://www.google.com/">
            <img src={screenLogo} alt="" className="logo-image code-link" />
          </a>
          <a href="https://www.google.com/">
            <img src={githubLogo} alt="" className="logo-image code-link" />
          </a>
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
