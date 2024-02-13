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
      fetch(`.netlify/functions/wc?tz=${myTz}`)
        .then((data) => resolve(data.json()))
        .catch(reject);
    });

    const locationPromise = new Promise((resolve, reject) => {
      fetch(`.netlify/functions/geoip`)
        .then((data) => resolve(data.json()))
        .catch(reject);
    });

    Promise.all([worldTimeApiPromise, locationPromise]).then((response) => {
      const [worldTimeData, locationData] = response;

      this.setState({
        data: {
          datetime: worldTimeData.data.datetime,
          timezone: worldTimeData.data.abbreviation,
          location: `in ${locationData.data.city}, ${locationData.data.country_name}`,
        },
        info: {
          datetime: worldTimeData.data.datetime,
          timezone: worldTimeData.data.timezone,
          dayOfYear: worldTimeData.data.day_of_year,
          dayOfWeek: worldTimeData.data.day_of_week,
          weekNumber: worldTimeData.data.week_number,
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
