import React from 'react';
import Chart from "react-apexcharts";
import './ChartProjects.scss';

class ChartProjects extends React.Component {
  state = {
    chartData: {
      series: [
        {
          name: 'Projects',
          data: [950, 850, 50, 50, 200],
        },
      ],
      options: {
        grid: {
          xaxis: {
            lines: {
              show: true,
            }
          },
        },
        stroke: {
          colors: ['#ff87a0', '#42b2f2', '#ffda6e', '#42b2f2', '#ac7bf9'],
          width: 1,
        },
        chart: {
          offsetY: -15,
          toolbar: {
            show: false,
          },
          foreColor: '#99a2a6',
        },
        legend: {
          show: false,
        },
        plotOptions: {
          bar: {
            horizontal: true,
            distributed: true,
          }
        },
        fill: {
          opacity: .6,
        },
        colors: ['#ffe0e6', '#d3ebfc', '#fff6dc', '#d3ebfc', '#ecdfff'],
        dataLabels: {
          enabled: false
        },
        labels: {
          show: false,
        },
        tooltip: {
          custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            return `
            <div class="arrow_box">
              <span>${series[seriesIndex][dataPointIndex]}</span>
            </div>`;
          },
          theme: 'dark',
        },
        xaxis: {
          type: 'category',
          categories: ['Всего', 'Закрыто', 'В работе', 'Новый', 'Просрочен'],
          min: 0,
          max: 2000,
          tickAmount: 10,
          crosshairs: {
            show: false,
          },
        },
        responsive: [
          {
            breakpoint: 600,
            options: {
              plotOptions: {
                bar: {
                  horizontal: false
                }
              },
            }
          },
          {
            breakpoint: 1140,
            options: {
              xaxis: {
                tickAmount: 5,
              },
            }
          }
        ]
      },
    },
  };

  render() {
    return (
      <div className="analytics__chart chart-projects">
        <Chart
          options={this.state.chartData.options}
          series={this.state.chartData.series}
          type="bar"
          height={200}
        />
      </div>
    );
  }
}

export default ChartProjects;