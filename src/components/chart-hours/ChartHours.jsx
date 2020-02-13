import React from 'react';
import { Line } from 'react-chartjs-2';
import './ChartHours.scss';

class ChartHours extends React.Component {

  state = {
    chartData: {
      labels: ["Group 1", "Group 2", "Group 3"],
      datasets: [{
        label: 'Groups',
        data: [0, 20, 10]
      }]
    }
  };

  render() {
    return (
      <div className="analytics__chart chart-hours">
        <Line ref={this.chart} data={this.state.chartData} height={150} width={300} />
      </div>
    );
  }
}

export default ChartHours;