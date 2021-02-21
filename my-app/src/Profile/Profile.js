import PropTypes from 'prop-types';
import React from 'react';
import './Profile.css';

const Profile = ({ avatar, name, stats, location, tag }) => {
  return (
    <div className="profile">
      <div className="description">
        <img
          src={avatar}
          alt="Аватар пользователя"
          className="profile_avatar"
        />
        <p className="profile_name">{name}</p>
        <p className="profile_tag">@{tag}</p>
        <p className=" profile_location">{location}</p>
      </div>

      <ul className="profile_stats">
        <li className="profile_stats_item followers">
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className="profile_stats_item">
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className="profile_stats_item">
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
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
