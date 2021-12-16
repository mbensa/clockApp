import { Component } from "react";
import "./App.css";
import { Button } from "./components/button";
import { Image } from "./components/image";
import { Quote } from "./components/quote";
import { Clock } from "./components/clock";
import { Info } from "./components/info";

const fakedata = {
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
  constructor(props) {
    super(props);
    this.state = { data: fakedata, info: infoData };
  }

  worldTimeUpdater = () => {
    const myTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log(myTz);

    setTimeout(() => {
      fetch(`http://worldtimeapi.org/api/timezone/${myTz}`)
        .then((response) => {
          if (response.ok) {
            response.json().then((data) => {
              this.setState({
                data: {
                  datetime: data.datetime,
                  timezone: data.abbreviation,
                  location: fakedata.location,
                },
                info: {
                  timezone: data.timezone,
                  dayOfYear: data.day_of_year,
                  dayOfWeek: data.day_of_week,
                  weekNumber: data.week_number,
                },
              });
            });
          } else {
            console.log("INTERNAL ERROR ", response);
          }
        })
        .catch((error) => console.log("ERROR", error));
    }, 3000);
  };

  componentDidMount() {
    this.worldTimeUpdater();
  }

  render() {
    const { data, info } = this.state;

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
        <Info data={info} />
      </div>
    );
  }
}

export default App;
