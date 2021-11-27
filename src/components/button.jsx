import React, {Component} from 'react';
import {Icon} from './icon';
import {Text} from './text';
import classNames from 'classnames';
import './button.css';

export class Button extends Component {
  render() {
    const {icon, text} = this.props;

    const buttonClass = classNames({
      'button-icon': icon && !text,
      'button-text-icon': icon && text,
    });

    return (
      <button type="button" className={buttonClass}>
        {text ? <Text text={text} /> : null}
        <Icon iconType={icon} />
      </button>
    )
  }
}