import React from 'react';
import './FlyerItem.css';

interface FlyerItemProps {
  href: string;
  title: string;
  iconSrc: string;
}

const FlyerItem: React.FC<FlyerItemProps> = ({ href, title, iconSrc }) => {
  return (
    <a href={href} className="flyer-item" target="_blank">
      <img src={iconSrc} alt="Flyer Icon" className="flyer-icon" />
      <b className="flyer-link">{title}</b>
    </a>
  );
};

export default FlyerItem;
