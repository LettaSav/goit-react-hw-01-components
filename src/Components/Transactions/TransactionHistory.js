import PropTypes from 'prop-types';
import React from 'react';
import styles from './Transactions.module.css';

const TransactionsHistory = ({ items }) => (
  <table className={styles.trans_history}>
    <thead className={styles.trans_head}>
      <tr>
        <th className={styles.trans_header}>Type</th>
        <th className={styles.trans_header}>Amount</th>
        <th className={styles.trans_header}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr key={item.id} className={styles.trans_tbody}>
          <td className={styles.trans_item}>{item.type}</td>
          <td className={styles.trans_item}>{item.amount}</td>
          <td className={styles.trans_item}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
    }),
  ),
};
export default TransactionsHistory;
