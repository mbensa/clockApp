import React, { Component } from "react";
import { Icon } from "./icon";
import { Text } from "./text";
import classNames from "classnames";
import "./button.css";

export class Button extends Component {
  render() {
    const { icon, text, ...rest } = this.props;

    const buttonClass = classNames({
      "button-icon": icon && !text,
      "button-text-icon": icon && text,
    });

    return (
      <button type="button" className={buttonClass} {...rest}>
        {text ? <Text text={text} /> : null}
        <Icon iconType={icon} />
      </button>
    );
  }
}
