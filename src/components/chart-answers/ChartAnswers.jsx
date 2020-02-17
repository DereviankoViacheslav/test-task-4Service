import React from 'react';
import Chart from "react-apexcharts";
import './ChartAnswers.scss';

class ChartAnswers extends React.Component {

  state = {
    chartData: {
      series: [50, 50],
      options: {
        plotOptions: {
          pie: {
            donut: {
              size: '80%'
            },
            customScale: 0.95
          }
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          colors: ['#ff6700', '#ffff00'],
        },
        tooltip: {
          custom: function ({ series, seriesIndex }) {
            return `
            <div class="arrow_box">
              <span>${series[seriesIndex]}</span>
            </div>`;
          },
          theme: 'dark',
        },
        labels: ['Да', 'Нет'],
        legend: {
          position: 'right',
          offsetX: 0,
          offsetY: 50,
          labels: {
            colors: ['#ff6700', '#ffff00'],
          },
          markers: {
            fillColors: ['#ff6700', '#ffff00'],
            radius: 0,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: '100%'
              },
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0,
              }
            }
          }
        ],
      },
    }
  };

  render() {
    return (
      <div className="analytics__chart chart-answers">
        <Chart
          options={this.state.chartData.options}
          series={this.state.chartData.series}
          type="donut"
        />
      </div>
    );
  }
}

export default ChartAnswers;