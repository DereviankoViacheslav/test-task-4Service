import React from 'react';
import Chart from "react-apexcharts";
import moment from 'moment';
import './ChartHours.scss';

class ChartHours extends React.Component {

  fakeData1 = [
    { x: moment('2020-01-01').valueOf(), y: 50 },
    { x: moment('2020-01-02').valueOf(), y: 40 },
    { x: moment('2020-01-03').valueOf(), y: 52 },
    { x: moment('2020-01-04').valueOf(), y: 43 },
    { x: moment('2020-01-05').valueOf(), y: 33 },
    { x: moment('2020-01-06').valueOf(), y: 52 },
    { x: moment('2020-01-07').valueOf(), y: 31 },
    { x: moment('2020-01-08').valueOf(), y: 43 },
    { x: moment('2020-01-09').valueOf(), y: 33 },
    { x: moment('2020-01-10').valueOf(), y: 52 }
  ];

  fakeData2 = [
    { x: moment('2020-01-01').valueOf(), y: 25 },
    { x: moment('2020-01-02').valueOf(), y: 52 },
    { x: moment('2020-01-03').valueOf(), y: 42 },
    { x: moment('2020-01-04').valueOf(), y: 33 },
    { x: moment('2020-01-05').valueOf(), y: 53 },
    { x: moment('2020-01-06').valueOf(), y: 22 },
    { x: moment('2020-01-07').valueOf(), y: 41 },
    { x: moment('2020-01-08').valueOf(), y: 23 },
    { x: moment('2020-01-09').valueOf(), y: 43 },
    { x: moment('2020-01-10').valueOf(), y: 22 }
  ];

  state = {
    chartData: {
      series: [
        {
          name: 'series1',
          data: this.fakeData1,
        },
        {
          name: 'series2',
          data: this.fakeData2,
        }
      ],
      options: {
        markers: {
          size: 0,
          colors: ['#fff'],
          strokeColors: '#4c5e70',
          strokeWidth: 3,
          hover: {
            sizeOffset: 5
          }
        },
        chart: {
          parentHeightOffset: 10,
          toolbar: {
            show: false,
          },
        },
        legend: {
          show: false,
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: false,
        },
        yaxis: {
          min: 0,
          max: 60,
          tickAmount: 6,
        },
        xaxis: {
          type: 'datetime',
          labels: {
            format: 'MM.dd',
          },
          axisBorder: {
            show: false,
          },
          crosshairs: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          min: this.fakeData1[0].x,
          tooltip: {
            enabled: false,
          },
        },
        tooltip: {
          enabled: true,
          shared: false,
          intersect: false,
          inverseOrder: false,
          custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            return `
            <div class="arrow_box">
              <span>${series[seriesIndex][dataPointIndex]}</span>
            </div>`;
          },
          theme: 'dark',
          style: {
            fontSize: '14px',
          },
          x: {
            show: false,
          },
          y: {
            show: false,
          },
          marker: {
            show: true,
          },
          items: {
            display: 'flex',
          },
        },
        fill: {
          type: 'solid',
          opacity: .8,
          colors: ['#f8418d', '#dda6e1'],
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              xaxis: {
                labels: {
                  offsetX: 15,
                },
              }
            }
          }
        ],
      },
    },
  };

  render() {
    return (
      <div id="chart" className="analytics__chart chart-hours">
        <div className="chart-hours__header">
          <div>
            <div className="chart-hours__title">Wavy Lines</div>
            <span className="chart-hours__subtitle">Working Hours</span>
          </div>
          <select className="chart-hours__select-period" name="period" id="chart-period">
            <option value="this-week">THIS WEEK</option>
            <option value="this-month">THIS MONTH</option>
            <option value="this-year">THIS YEAR</option>
          </select>
        </div>
        <Chart
          options={this.state.chartData.options}
          series={this.state.chartData.series}
          type="area"
          height={250}
          width="98%"
        />
      </div>
    );
  }
}

export default ChartHours;