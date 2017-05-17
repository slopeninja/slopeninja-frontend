import React from 'react';

import './ProgressBar.css';

const ProgressBar = ({ small, progress }) => {
  let progressBarStyle;

  if (small) {
    progressBarStyle = {
      height: '14px',
      width: '78px',
    };
  }

  return (
    <span className="ProgressBar-box" style={progressBarStyle}>
      <span
        className="ProgressBar-progress"
        style={{
          width: `${progress}%`,
        }}
      />
    </span>
  );
};

export default ProgressBar;
