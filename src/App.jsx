import { Component } from "react";
import "./App.css";
import { Icon } from "./components/icon";
import { Text } from "./components/text";
import { Button } from "./components/button";
import { Image } from "./components/image";
import { Quote } from "./components/quote";
import { Clock } from "./components/clock";

const data = {
  datetime: "2021-11-27T05:03:39.056Z",
  location: "IN LONDON, UK",
  timezone: "BST",
};

class App extends Component {
  render() {
    // const quote = document.querySelector(".QuoteText");
    // const author = document.querySelector(".QuoteAuthor");

    // async function renderQuote() {
    //   const response = await fetch("https://api.quotable.io/random");
    //   const data = await response.json();
    //   if (response.ok) {
    //     quote.textContent = data.content;
    //     author.textContent = data.author;
    //   } else {
    //     quote.textContent = "An error occured";
    //     console.log(data);
    //   }
    // }

    // renderQuote();

    return (
      <div className="app">
        <Quote
          quote="The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract thruth and value."
          author="Ada Lovelace"
        />
        <Image datetime={data.datetime}></Image>
        <div className="bottomContainer">
          <Clock data={data}></Clock>
          <Button text="MORE" icon="arrow" />
        </div>
      </div>
    );
  }
}

export default App;
