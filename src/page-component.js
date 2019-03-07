import React, { Component } from "react";
import screenLogo from "./images/screen-logo.png";
import githubLogo from "./images/github-logo.png";

/*=========================WEBSITE PAGE============================================= */
class WebsitePage extends Component {
  render() {
    return (
      <div className="page-container" style={this.props.style}>
        {/* PAGE TITLE */}
        <h1 className="page-container__title">{this.props.activePage.title}</h1>
        {/* PAGE IMAGE */}
        <a className="page-container__image-link" href={this.props.activePage.pageLink} target="_blank" rel="noopener noreferrer">
          <img className="page-container__image" src={this.props.activePage.media} alt="" />
        </a>
        <div className="info-container">
          <h3>LANGUAGES, FRAMEWORKS AND LIBRARIES</h3>
          <div className="info-container__logos">
            {/* ITERATOR FOR FRAMEWORKS LOGOS */}
            {this.props.activePage.libraries.map((logo, index) => (
              <div className="info-container__logos__image" key={`logo${index}`}>
              <img
                src={logo}
                alt=""
              />
              </div>
            ))}
          </div>
          <div className="info-container__description">
            {/* ITERATOR FOR TEXT PARAGRAPHS */}
            {this.props.activePage.description.map((paragraph, index) => (
              <p key={`para${index}`}>{paragraph}</p>
            ))}
          </div>
          <h3>LINKS</h3>
          {/* LINKS TO EXTERNAL PAGES */}
          <div className="info-container__logos">
            <a
              href={this.props.activePage.pageLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={screenLogo} alt="" className="info-container__logos__image code-link" />
            </a>
            <a
              href={this.props.activePage.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubLogo} alt="" className="info-container__logos__image code-link" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default WebsitePage;
