import React, { Component } from "react";
import PropTypes from "prop-types";
import ArrowUp from "../assets/desktop/icon-arrow-up.svg";
import ArrowDown from "../assets/desktop/icon-arrow-down.svg";
import Moon from "../assets/desktop/icon-moon.svg";
import Refresh from "../assets/desktop/icon-refresh.svg";
import Sun from "../assets/desktop/icon-sun.svg";

export class Icon extends Component {
  //these icons are here as a static variable, out of render in order to prevent it from rendering each time we pass a new prop or get a new state in this component
  icons = {
    moon: Moon,
    arrowUp: ArrowUp,
    arrowDown: ArrowDown,
    refresh: Refresh,
    sun: Sun,
  };

  render() {
    const { iconType } = this.props;

    return <img src={this.icons[iconType]} alt={iconType} />;
  }
}

Icon.propTypes = {
  iconType: PropTypes.string,
};
