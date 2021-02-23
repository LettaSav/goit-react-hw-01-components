import PropTypes from 'prop-types';
import React from 'react';
import styles from './FriendList.module.css';

const FriendListItem = ({ friend: { isOnline, avatar, name } }) => (
  <li className={styles.friend_item}>
    <span className={isOnline ? styles.isOnline : styles.isOffline}></span>
    <img className={styles.friend_avatar} src={avatar} alt="" width="48" />
    <p className={styles.friend_nam}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default FriendListItem;
