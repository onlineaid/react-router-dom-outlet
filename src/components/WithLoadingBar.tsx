import React, { useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';

const withLoadingBar = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    // Simulate loading when the component mounts
    useEffect(() => {
      // Set an initial progress value to indicate loading has started
      setProgress(100);

      // Simulate loading by using a setTimeout
      const loadingTimeout = setTimeout(() => {
        // Set the progress to 100% to complete loading
        setProgress(100);
        setLoading(false);
      }, 1500); // Simulated loading time in milliseconds

      // Clean up the timeout if the component unmounts
      return () => clearTimeout(loadingTimeout);
    }, []);

    return (
      <div>
        {loading && (
          <LoadingBar
            color="#80f"
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
        )}
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withLoadingBar;
