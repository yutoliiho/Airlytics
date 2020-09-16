import React from 'react';
import { Doughnut, Bar, Line, Pie, Bubble, HorizontalBar, Radar, Scatter } from 'react-chartjs-2';

class PriceChart extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      chartData: {
        labels: this.props.night_price_histogram,
        datasets: [
          {
            label: 'Nightly Price',
            data: this.props.night_price_histogram
          }
        ]
      }
    }
  }
  render() {
    return (
      <div className='chart'>
        <Line
          data={this.state.chartData}
          width={350}
          height={300}
          options={{
          }}
        />
      </div>
    );
  }
}

export default PriceChart;
