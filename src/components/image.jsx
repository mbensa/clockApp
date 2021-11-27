import React, { Component } from "react";
import PropTypes from "prop-types";
import "./image.css";
import classNames from "classnames";

export class Image extends Component {
  render() {
    const { datetime } = this.props;

    const currHour = new Date(datetime).getHours();
    const timeOfDay = currHour >= 5 && currHour < 18 ? "day" : "night";

    const imageClass = classNames("bg-img", timeOfDay);
    const containerClass = classNames("img-container");

    return (
      <>
        <figure className={imageClass}> </figure>
        <div className={containerClass}></div>
      </>
    );
  }
}

Image.propTypes = {
  datetime: PropTypes.string,
};
