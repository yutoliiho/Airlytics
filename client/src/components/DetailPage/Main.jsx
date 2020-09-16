import React from 'react';
import { Doughnut } from 'react-chartjs-2';
const axios = require('axios')

class Main extends React.Component {
  constructor(prop) {
    super(prop);
  }

  render() {
    var location = this.props.location
    var occupancy = this.props.occupancy
    console.log(this.props.occupancy_histogram)
    console.log(this.props.night_price_histogram)
    return (
      <div>
        <h2>Main</h2>
        <h2>{location}</h2>
        <h2>{occupancy}</h2>
      </div>
    )
  }
}

export default Main;
