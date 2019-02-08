import React, { Component } from "react";

/*=========================NAVIGATION MENU============================================= */

class NavigationMenu extends Component {
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
            Core Correct
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
export default NavigationMenu;
