import React, { Component } from "react";
import PropTypes from "prop-types";
import "./text.css";

export class Text extends Component {
  static defaultProps = {
    heading: "p",
  };

  render() {
    const { heading, text } = this.props;

    const Tag = heading;

    return <Tag>{text}</Tag>;
  }
}

Text.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  weight: PropTypes.string,
};
