import React from 'react';
import './TeamCard.css';

interface TeamCardProps {
  imgSrc: string;
  name: string;
  title: string;
  description: string;
  email: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ imgSrc, name, title, description, email }) => {
  return (
    <div className="team-card">
      <div className="team-card-image-container">
        <img src={imgSrc} alt={name} className="team-card-image" />
      </div>
      <div className="team-card-content">
        <h2 className="team-card-name">{name}</h2>
        <b className="team-card-title">{title}</b>
        <p className="team-card-desc">{description}</p>
        <p className="team-card-email">{email}</p>
      </div>
    </div>
  );
};

export default TeamCard;
