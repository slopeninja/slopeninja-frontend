import React from 'react';
import { Link } from 'react-router-dom';
import './HomeButton.css';

const BackButton = () => {

  return (
    <Link className="HomeButton-wrapper" to="/resorts">
      <span className="HomeButton-text">HOME</span>
    </Link>
  );
}
export default BackButton;
