import PropTypes from 'prop-types';
import React from 'react';
import './Statistics.css';

const getBgColor = () =>
  `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

const Statistics = ({ title, stats }) => (
  <section className="statis_section">
    <h2 className="statis_title">{title}</h2>
    <ul className="statis_list">
      {stats.map(stat => (
        <li
          key={stat.id}
          className="statis_wrapper"
          style={{
            backgroundColor: getBgColor(),
          }}
        >
          <span className="statis_label">{stat.label}</span>
          <span className="statis_percent">{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
export default Statistics;
