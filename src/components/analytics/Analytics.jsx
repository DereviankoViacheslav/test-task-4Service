import React from 'react';
import ChartHours from '../chart-hours';
import ChartAnswers from '../chart-answers';
import ChartProjects from '../chart-projects';
import './Analytics.scss';

function Analytics() {
  return (
    <div className="analytics">
      <div className="analytics__title">
        <div className="analytics__greeting">Hi Filip,</div>
        <span className="analytics__subtitle">
          Checkout your latest projects and their progres
        </span>
      </div>
      <ChartHours />
      <div className="analytics__bottom-chart-container">
        <ChartAnswers />
        <ChartProjects />
      </div>
    </div>
  );
}

export default Analytics;