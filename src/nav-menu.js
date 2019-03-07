import React, { Component } from "react";

/*=========================NAVIGATION MENU============================================= */

class NavigationMenu extends Component {
  render() {
    return (
      <nav className="primary-nav">
        <ul className="primary-nav__menu">
          <li
            className="primary-nav__menu__item"
            onClick={event => this.props.changeDisplay(event, "intro")}
          >
            who am I
          </li>
          <li
            className="primary-nav__menu__item"
            onClick={event => this.props.changeDisplay(event, "coreCorrect")}
          >
            Core Correct
          </li>
          <li
          className="primary-nav__menu__item"
          onClick={event => this.props.changeDisplay(event, "freshAir")}
        >
          Fresh Air
        </li>
          <li
            className="primary-nav__menu__item"
            onClick={event => this.props.changeDisplay(event, "linuxMint")}
          >
            Linux Mint
          </li>
          <li
            className="primary-nav__menu__item"
            onClick={event => this.props.changeDisplay(event, "typhon")}
          >
            Typhon
          </li>
          <li
            className="primary-nav__menu__item"
            onClick={event => this.props.changeDisplay(event, "pomodoro")}
          >
            Pomodoro Clock
          </li>
          <li
            className="primary-nav__menu__item"
            onClick={event => this.props.changeDisplay(event, "weatherCards")}
          >
            Weather Cards
          </li>
          <li
            className="primary-nav__menu__item"
            onClick={event => this.props.changeDisplay(event, "calculator")}
          >
            Calculator
          </li>
          <li
            className="primary-nav__menu__item"
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
