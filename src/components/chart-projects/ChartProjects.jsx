import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import './ChartProjects.scss';

class ChartProjects extends React.Component {

  fakeDateList = ['01.01', '01.02', '01.03', '01.04', '01.05'];
  fakeDataSet1 = [40, 50, 35, 50, 45, 40];
  fakeDataSet2 = [45, 25, 35, 45, 53, 40];

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
          backgroundColor: ['rgb(221, 166, 225, 0.6)'],
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
      <div className="analytics__chart chart-projects">
        <HorizontalBar
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

export default ChartProjects;