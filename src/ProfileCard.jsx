// src/ProfileCard.jsx
import React, { useState } from 'react';
import './ProfileCard.css';

function ProfileCard({ name, role, location, bio }) {
  // Add a state to handle the interactive Follow button toggle
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="profile-card">
      <div className="profile-content">
        <h2 className="profile-name">{name}</h2>
        <p className="role">{role}</p>
        <p className="location">{location}</p>
        <p className="bio">{bio}</p>
      </div>
      
      <button 
        className={`follow-btn ${isFollowing ? 'following' : ''}`} 
        onClick={handleFollowToggle}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  );
}

export default ProfileCard;