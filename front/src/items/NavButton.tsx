import React from 'react';
import { Link } from 'react-router-dom';
import './NavButton.css';

interface NavButtonProps {
  to: string;
  label: string;
}

const NavButton: React.FC<NavButtonProps> = ({ to, label }) => {
  return (
    <Link to={to} className="nav-button">
      {label}
    </Link>
  );
};

export default NavButton;
