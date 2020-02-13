import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './ChartAnswers.scss';

class ChartAnswers extends React.Component {

  state = {
    chartData: {
      labels: ["Да", "Нет"],
      datasets: [
        {
          label: 'Groups',
          data: [500, 500],
          backgroundColor: [
            '#ff6700',
            'yellow',
          ],
        }
      ]
    }
  };

  chart = React.createRef();

  render() {
    return (
      <div className="chart-answers analytics__chart">
        <Doughnut
          ref={this.chart}
          data={this.state.chartData}
          // height={10}
          width={1}
          options={
            {
              maintainAspectRatio: false,
              responsive: true,
              legend: { position: 'right' }
            }
          }
        />
      </div>
    );
  }
}

export default ChartAnswers;