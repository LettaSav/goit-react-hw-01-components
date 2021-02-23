import PropTypes from 'prop-types';
import React from 'react';
import styles from './Profile.module.css';

const Profile = ({ avatar, name, stats, location, tag }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className={styles.profile_avatar}
        />
        <p className={styles.profile_name}>{name}</p>
        <p className={styles.profile_tag}>@{tag}</p>
        <p className={styles.profile_location}>{location}</p>
      </div>

      <ul className={styles.profile_stats}>
        <li className={styles.profile_stats_item}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li className={styles.profile_stats_item}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li className={styles.profile_stats_item}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
