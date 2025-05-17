import React from 'react';
import { Spinner } from 'react-bootstrap';

interface LoadingSpinnerProps {}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center py-5">
      <div className="neon-spinner">
        <Spinner 
          animation="border" 
          role="status" 
          style={{ 
            width: '3rem', 
            height: '3rem', 
            borderColor: 'transparent #0fe0ff transparent #0fe0ff',
            borderWidth: '3px'
          }} 
        />
      </div>
      <span className="mt-3 fs-5 text-neon">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
