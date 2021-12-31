import { Component } from "react";
import "./App.css";
import { Button } from "./components/button";
import { Image } from "./components/image";
import { Quote } from "./components/quote";
import { Clock } from "./components/clock";
import { Info } from "./components/info";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { infoVisibility: false };
  }

  worldTimeUpdater = () => {
    const myTz = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const worldTimeApiPromise = new Promise((resolve, reject) => {
      fetch(`'../netlify/functions/wc'?tz=${myTz}`)
        .then((data) => resolve(data.json()))
        .catch(reject);
    });

    const locationPromise = new Promise((resolve, reject) => {
      fetch(`https://api.freegeoip.app/json/?apikey=c42b25c0-68db-11ec-a1e5-2b9cb6d8cb04`)
        .then((data) => resolve(data.json()))
        .catch(reject);
    });

    Promise.all([worldTimeApiPromise, locationPromise]).then((response) => {
      const [worldTimeData, locationData] = response;

      this.setState({
        data: {
          datetime: worldTimeData.datetime,
          timezone: worldTimeData.abbreviation,
          location: `in ${locationData.city}, ${locationData.country_name}`,
        },
        info: {
          datetime: worldTimeData.datetime,
          timezone: worldTimeData.timezone,
          dayOfYear: worldTimeData.day_of_year,
          dayOfWeek: worldTimeData.day_of_week,
          weekNumber: worldTimeData.week_number,
        },
      });
    });
  };

  handleInfoVisibility = () => {
    this.setState({ infoVisibility: !this.state.infoVisibility });
  };

  componentDidMount() {
    this.worldTimeUpdater();
  }

  render() {
    const { data, info, infoVisibility } = this.state;
    if (!data && !info) {
      return null;
    }

    return (
      <div className="app">
        <Quote />
        <Image datetime={data.datetime}></Image>
        <div className="bottomContainer">
          <Clock data={data}></Clock>
          {infoVisibility ? (
            <Button text="LESS" icon="arrowUp" onClick={this.handleInfoVisibility} />
          ) : (
            <Button text="MORE" icon="arrowDown" onClick={this.handleInfoVisibility} />
          )}
        </div>
        {infoVisibility && <Info data={info} />}
      </div>
    );
  }
}

export default App;
