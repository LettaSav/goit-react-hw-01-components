import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import React from 'react';

const FriendList = ({ friends }) => (
  <ul className="friend_list">
    {friends.map(friend => (
      <FriendListItem key={friend.id} friend={friend} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
export default FriendList;
