import React from 'react';
import openverseLogo from '../openverse2.svg';
import { JSX } from 'react';

interface LoadingSpinnerProps {}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ 
      height: '100vh',
      width: '100vw',
      position: 'fixed',
      top: 0,
      left: 0
    }}>
      <div className="neon-spinner">
        <img 
          src={openverseLogo}
          alt="Loading..."
          style={{ 
            width: '20rem', 
            height: '20rem',
            animation: 'zoom 1s infinite',
          }} 
        />
        <style>
          {`
            @keyframes zoom {
              0% { transform: scale(1); }
              100% { transform: scale(1.1); }
            }
          `}
        </style>
      </div>
      <span className="mt-4 text-neon" style={{ fontSize: '2.5rem' }}></span>
      <span style={{ fontSize: '2.5rem', color: 'white' }}>made with ❤️ by openverse</span>
    </div>
  );
};

export default LoadingSpinner;
