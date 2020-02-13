import React from 'react';
// import { Line } from 'react-chartjs-2';
import './ChartAnswers.scss';

class ChartAnswers extends React.Component {

  state = {
    chartData: {
      labels: ["Group 1", "Group 2", "Group 3"],
      datasets: [{
        label: 'Groups',
        data: [0, 20, 10]
      }]
    }
  };

  chart = React.createRef();

  render() {
    return (  
      <div className="chart-answers analytics__chart">
        {/* <Line ref={this.chart} data={this.state.chartData} height={150} width={300} /> */}
      </div>
    );
  }
}

export default ChartAnswers;