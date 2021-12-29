import React, { Component } from "react";
import PropTypes from "prop-types";
import "./clock.css";
import { Icon } from "./icon";
import { Text } from "./text";
import "./clock.css";

export class Clock extends Component {
  render() {
    const {
      data: { datetime, location, timezone },
    } = this.props;

    if (!datetime) {
      return null;
    }

    const formattedTime = new Date(datetime).toLocaleTimeString("de-CH", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const currHour = new Date(datetime).getHours();
    const timeOfDay = currHour >= 5 && currHour < 18 ? "sun" : "moon";

    let greeting = "";
    switch (true) {
      case currHour >= 5 && currHour < 12:
        greeting = "GOOD MORNING";
        break;
      case currHour >= 12 && currHour < 18:
        greeting = "GOOD AFTERNOON";
        break;
      default:
        greeting = "GOOD EVENING";
        break;
    }

    return (
      <div className="clockContainer">
        <div className="greeting">
          <Icon iconType={timeOfDay} />
          <Text
            heading="h4"
            text={window.matchMedia("(min-width: 768px)").matches ? `${greeting}, IT'S CURRENTLY` : greeting}
          />
        </div>
        <div className="time">
          <Text heading="h1" text={formattedTime} />
          <Text heading="h4" text={timezone} />
        </div>
        <div className="location">
          <Text heading="h3" text={location} />
        </div>
      </div>
    );
  }
}

Clock.propTypes = {
  data: PropTypes.shape({
    datetime: PropTypes.string,
    location: PropTypes.string,
    timezone: PropTypes.string,
  }),
};
