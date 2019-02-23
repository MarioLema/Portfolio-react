import React, { Component } from "react";
import screenLogo from "./images/screen-logo.png";
import githubLogo from "./images/github-logo.png";

/*=========================WEBSITE PAGE============================================= */
class WebsitePage extends Component {
  render() {
    return (
      <div className="page-container" style={this.props.style}>
        {/* PAGE TITLE */}
        <h1 className="section-title">{this.props.activePage.title}</h1>
        {/* PAGE IMAGE */}
        <a className="image-container" href={this.props.activePage.pageLink} target="_blank" rel="noopener noreferrer">
          <img className="web-image" src={this.props.activePage.media} alt="" />
        </a>
        <div className="description-container">
          <h3>LANGUAGES, FRAMEWORKS AND LIBRARIES</h3>
          <div className="logos-container">
            {/* ITERATOR FOR FRAMEWORKS LOGOS */}
            {this.props.activePage.libraries.map((logo, index) => (
              <div className="logo-image" key={`logo${index}`}>
              <img
                src={logo}
                alt=""
              />
              </div>
            ))}
          </div>
          <div className="web-description">
            {/* ITERATOR FOR TEXT PARAGRAPHS */}
            {this.props.activePage.description.map((paragraph, index) => (
              <p key={`para${index}`}>{paragraph}</p>
            ))}
          </div>
          <h3>LINKS</h3>
          {/* LINKS TO EXTERNAL PAGES */}
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
export default WebsitePage;
