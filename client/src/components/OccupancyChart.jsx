import React from 'react';
import { Doughnut, Bar, Line, Pie, Bubble, HorizontalBar, Radar, Scatter } from 'react-chartjs-2';


class OccupancyChart extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      chartData: {
        labels: this.props.occupancy_histogram,
        datasets: [
          {
            label: 'Occupancy',
            data: this.props.occupancy_histogram
          }
        ]
      }
    }
  }
  render() {
    // console.log(this.props.occupancy_histogram)
    return (
      <div className='chart'>
        <Bar
          data={this.state.chartData}
          width={550}
          height={300}
          options={{
            // title: {
            //   display: true,
            //   text: "Occupancy",
            //   fontSize: 25
            // },
            // legend: {
            //   display: true,
            //   position: 'right'
            // }
          }}
        />
      </div>
    )
  }
}

export default OccupancyChart;