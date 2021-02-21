import PropTypes from 'prop-types';
import React from 'react';
import './Transactions.css';

const TransactionsHistory = ({ items }) => (
  <table className="trans_history">
    <thead className="trans_head">
      <tr>
        <th className="trans_header">Type</th>
        <th className="trans_header">Amount</th>
        <th className="trans_header">Currency</th>
      </tr>
    </thead>
    {items.map(item => (
      <tbody>
        <tr key={item.id} className="trans_tbody">
          <td className="trans_item">{item.type}</td>
          <td className="trans_item">{item.amount}</td>
          <td className="trans_item">{item.currency}</td>
        </tr>
      </tbody>
    ))}
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
