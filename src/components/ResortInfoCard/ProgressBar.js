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

  let width = progress >= 0 ? progress : 0;

  return (
    <span className="ProgressBar-box" style={progressBarStyle}>
      <span
        className="ProgressBar-progress"
        style={{
          width: `${width}%`,
        }}
      />
    </span>
  );
};

export default ProgressBar;
