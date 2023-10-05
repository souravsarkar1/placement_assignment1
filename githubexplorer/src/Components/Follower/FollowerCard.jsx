import React from 'react';
import { Link } from 'react-router-dom';
import './FollowerCard.css'; // Import your CSS file

const FollowerCard = ({ avatar_url, login, type, html_url }) => {
  return (
    <div className="follower-card">
      <img className="avatar" src={avatar_url} alt="" />
      <p><strong>User Name:</strong> {login}</p>
      <p><strong>Type:</strong> {type}</p>
      <Link className="profile-link" to={html_url} target='_blank' rel="noopener noreferrer">GitHub Profile Link</Link>
    </div>
  );
}

export default FollowerCard;
