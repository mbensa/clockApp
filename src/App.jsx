import { Component } from "react";
import "./App.css";
import { Button } from "./components/button";
import { Image } from "./components/image";
import { Quote } from "./components/quote";
import { Clock } from "./components/clock";
import { Info } from "./components/info";

const data = {
  datetime: "2021-11-27T05:03:39.056Z",
  location: "IN LONDON, UK",
  timezone: "BST",
};

const infoData = {
  timezone: "Europe/London",
  dayOfYear: 295,
  dayOfWeek: 5,
  weekNumber: 42,
};

class App extends Component {
  worldTimeUpdater = () => {
    const myTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log(myTz);

    setInterval(() => {
      fetch(`http://worldtimeapi.org/api/timezone/${myTz}`)
        .then((response) => {
          if (response.ok) {
            const data = response.json();
            console.log(data);
          } else {
            console.log("INTERNAL ERROR ", response);
          }
        })
        .catch((error) => console.log("ERROR", error));
    }, 6e4);
  };

  componentDidMount() {
    this.worldTimeUpdater();
  }

  render() {
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
        <Info data={infoData} />
      </div>
    );
  }
}

export default App;
