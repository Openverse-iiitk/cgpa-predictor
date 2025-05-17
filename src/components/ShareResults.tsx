import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

interface ShareResultsProps {
  semesterGPA: number;
  cgpa: number;
}

const ShareResults: React.FC<ShareResultsProps> = ({ semesterGPA, cgpa }) => {
  const [copied, setCopied] = useState(false);
  
  const shareText = `📚 My predicted academic performance:
- Semester GPA: ${semesterGPA.toFixed(2)}
- Cumulative GPA: ${cgpa.toFixed(2)}
Check out the College CGPA Predictor!`;

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(shareText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My CGPA Prediction',
          text: shareText,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      handleCopyToClipboard();
    }
  };

  return (
    <div>
      <Button 
        variant="primary" 
        size="lg" 
        className="w-100 d-flex align-items-center justify-content-center gap-2"
        onClick={handleShare}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share" viewBox="0 0 16 16">
          <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
        </svg>
        {copied ? 'Copied!' : 'Share Results'}
      </Button>
    </div>
  );
};

export default ShareResults;


