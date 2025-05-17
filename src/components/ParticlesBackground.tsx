import React, { useEffect } from 'react';
import particlesConfig from '../assets/particles.json';
import './ParticlesBackground.css';

// Declare the global particlesJS function
declare global {
  interface Window {
    particlesJS: (id: string, config: any) => void;
  }
}

const ParticlesBackground: React.FC = () => {
  useEffect(() => {
    if (typeof window.particlesJS !== 'undefined') {
      window.particlesJS('particles-js', particlesConfig);
    } else {
      console.error('particles.js not loaded');
    }
  }, []);

  return (
    <div id="particles-js" className="particles-container"></div>
  );
};

export default ParticlesBackground;
