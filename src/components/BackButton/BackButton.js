import React from 'react';
import { Link } from 'react-router-dom';
import './BackButton.css';

const BackButton = () => {

  return (
    <div className="BackButton-wrapper">
      <Link className="BackButton-text" to="/resorts">HOME</Link>
    </div>
  );
}
export default BackButton;
