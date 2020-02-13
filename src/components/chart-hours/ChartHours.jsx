import React from 'react';
import { Line } from 'react-chartjs-2';
import './ChartHours.scss';

class ChartHours extends React.Component {

  fakeDateList = [
    '01.01', '01.02', '01.03', '01.04', '01.05', '01.06', '01.07', '01.08', '01.09', '01.10', '01.11'
  ];

  fakeDataSet1 = [40, 50, 35, 50, 45, 40, 25, 35, 45, 53, 40, 48, 40, 53, 50];
  fakeDataSet2 = [45, 25, 35, 45, 53, 40, 50, 43, 55, 42, 50, 42, 50, 44, 30];

  state = {
    chartData: {
      labels: this.fakeDateList,
      datasets: [
        {
          label: 'Groups',
          data: this.fakeDataSet1,
          backgroundColor: ['rgb(248, 65, 141, 0.6)'],
          pointBackgroundColor: ['rgb(255, 255, 255, 1)'],
          borderWidth: 0,
          pointRadius: 0,
          xAxisID: 0,
          yAxisID: 0
        },
        {
          label: 'Groups2',
          data: this.fakeDataSet2,
          backgroundColor: [ 'rgb(221, 166, 225, 0.6)'],
          pointBackgroundColor: ['rgb(255, 255, 255, 1)',
          ],
          borderWidth: 0,
          pointRadius: 0,
          xAxisID: 0,
          yAxisID: 0
        }
      ]
    },
  };

  render() {
    return (
      <div className="analytics__chart chart-hours">
        <Line
          ref={this.chart}
          data={this.state.chartData}
          height={250}
          options={
            {
              maintainAspectRatio: false,
              responsive: true
            }
          }
        />
      </div>
    );
  }
}

export default ChartHours;