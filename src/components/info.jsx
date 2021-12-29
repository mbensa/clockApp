import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text } from "./text";
import "./info.css";
import classNames from "classnames";

export class Info extends Component {
  render() {
    const {
      data: { timezone, dayOfWeek, dayOfYear, weekNumber, datetime },
    } = this.props;

    const currHour = new Date(datetime).getHours();
    const timeOfDay = currHour >= 5 && currHour < 18 ? "" : "night";

    const bgContainerClass = classNames("bgContainer", timeOfDay);

    return (
      <div className={bgContainerClass}>
        <div className="groupContainer">
          <div className="group">
            <Text heading="h6" text="CURRENT TIMEZONE" />
            <Text heading="h2" text={String(timezone)} />
          </div>
          <div className="group">
            <Text heading="h6" text="DAY OF THE YEAR" />
            <Text heading="h2" text={String(dayOfYear)} />
          </div>
        </div>

        <div className="groupContainer">
          <div className="group">
            <Text heading="h6" text="DAY OF THE WEEK" />
            <Text heading="h2" text={String(dayOfWeek)} />
          </div>
          <div className="group groupLast">
            <Text heading="h6" text="WEEK NUMBER" />
            <Text heading="h2" text={String(weekNumber)} />
          </div>
        </div>
      </div>
    );
  }
}

Info.propTypes = {
  data: PropTypes.shape({
    timezone: PropTypes.string,
    dayOfWeek: PropTypes.number,
    dayOfYear: PropTypes.number,
    weekNumber: PropTypes.number,
    datetime: PropTypes.string,
  }),
};
