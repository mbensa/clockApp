import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Button} from './button';
import {Text} from './text';
import './quote.css';

export class Quote extends Component {
  render() {
    const {quote, author} = this.props;

    const quoteClass = classNames(
      'quote'
    );

    const rootClass = classNames(
      'quoteContainer'
    )

    return(
      <div className={rootClass}>
        <blockquote className={quoteClass}>
          <Text text={quote}/>
          <Text text={author}/>
        </blockquote>
        <Button icon="refresh"/>
      </div>
    )
  }
}