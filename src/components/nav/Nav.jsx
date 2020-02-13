import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <i className="fas fa-home"></i>
          <span className="nav__list-item-text">Home</span>
        </li>
        <li className="nav__list-item">
          <i className="far fa-clock"></i>
          <span className="nav__list-item-text">Time Management</span>
        </li>
        <li className="nav__list-item">
          <i className="fas fa-inbox"></i>
          <span className="nav__list-item-text">Inbox</span>
        </li>
        <li className="nav__list-item">
          <i className="far fa-calendar-check"></i>
          <span className="nav__list-item-text">Calendar</span>
        </li>
        <li className="nav__list-item">
          <i className="fas fa-chart-line"></i>
          <span className="nav__list-item-text">Analytics</span>
        </li>
        <li className="nav__list-item">
          <i className="fas fa-cog"></i>
          <span className="nav__list-item-text">Settings</span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;