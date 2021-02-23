import Profile from './Components/Profile/Profile';
import Statistics from './Components/Statistics/Statistics';
import FriendList from './Components/FriendList/FriendList';
import TransactionsHistory from './Components/Transactions/TransactionHistory';
import user from './Components/Profile/user.json';
import statisticalData from './Components/Statistics/statistics-data.json';
import friends from './Components/FriendList/friends.json';
import transactions from './Components/Transactions/transactions.json';
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
