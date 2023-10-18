// TopLoadingBar.js
import React, { useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';

const TopLoadingBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 1000) {
        setProgress(progress + 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [progress]);

  return (
    <LoadingBar
      color="#29d"
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />
  );
};

export default TopLoadingBar;
