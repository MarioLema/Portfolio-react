import React, { Component } from "react";
import aboutImage from "./images/portrait-drawing.svg";

  /*=========================ABOUT ME SECTION============================================= */
  class AboutMe extends Component {
    render() {
      return (
        <div className="about-container" style={this.props.style}>
          <img src={aboutImage} alt="" className="about-container__image" />
          <div className="about-container__text">
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

  export default AboutMe;