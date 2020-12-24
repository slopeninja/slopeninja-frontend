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
    return <span>-</span>;
  }

  const width = progress >= 0 ? Math.min(progress, 100) : 0;

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
