import React from 'react';

import './ProgressBar.css';

const ProgressBar = ({ small, progress }) => {
  let progressBarStyle;
  let progressBar = null;
  if (small) {
    progressBarStyle = {
      height: '14px',
      width: '78px',
    };
  }
  if (small && progress === undefined) {
    return <span>-</span>
  }

  let width = progress >= 0 ? progress : 0;

  if (progress !== undefined) {
    progressBar = (
      <span className="ProgressBar-box" style={progressBarStyle}>
        <span
          className="ProgressBar-progress"
          style={{
            width: `${width}%`,
          }}
        />
      </span>
    );
  }
  return progressBar;
};

export default ProgressBar;
