import React from 'react';
import { Spinner } from 'react-bootstrap';

interface LoadingSpinnerProps {}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center py-5">
      <Spinner animation="border" role="status" variant="primary" style={{ width: '3rem', height: '3rem' }} />
      <span className="mt-3 fs-5 text-muted">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
