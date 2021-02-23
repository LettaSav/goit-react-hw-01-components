import PropTypes from 'prop-types';
import React from 'react';
import styles from './Statistics.module.css';

const getBgColor = () =>
  `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

const Statistics = ({ title, stats }) => (
  <section className={styles.statis_section}>
    <h2 className={styles.statis_title}>{title}</h2>
    <ul className={styles.statis_list}>
      {stats.map(stat => (
        <li
          key={stat.id}
          className={styles.statis_wrapper}
          style={{
            backgroundColor: getBgColor(),
          }}
        >
          <span className={styles.statis_label}>{stat.label}</span>
          <span className={styles.statis_percent}>{stat.percentage}%</span>
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
