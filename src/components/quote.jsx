import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Button } from "./button";
import { Text } from "./text";
import "./quote.css";

export class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  quoteUpdater = () => {
    fetch("https://api.quotable.io/random").then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          this.setState({
            author: data.author,
            quote: data.content,
          });
        });
      }
    });
  };

  componentDidMount() {
    this.quoteUpdater();
  }

  render() {
    const { author, quote } = this.state;

    const quoteClass = classNames("quote");

    const rootClass = classNames("quoteContainer");

    return (
      <div className={rootClass}>
        <blockquote className={quoteClass}>
          <Text text={quote} />
          <Text text={author} />
        </blockquote>
        <Button icon="refresh" onClick={this.quoteUpdater} />
      </div>
    );
  }
}
