import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionsHistory from './Transactions/TransactionHistory';
import user from './Profile/user.json';
import statisticalData from './Statistics/statistics-data.json';
import friends from './FriendList/friends.json';
import transactions from './Transactions/transactions.json';
import React from 'react';

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />;
      <FriendList friends={friends} />,
      <TransactionsHistory items={transactions} />;
    </>
  );
}
export default App;
