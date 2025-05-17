import React, { useState } from 'react';
import { Button, Row, Col, Form, Alert } from 'react-bootstrap';
import { FaShareAlt, FaClipboard, FaCheck } from 'react-icons/fa';

interface ShareResultsProps {
  semesterGPA: number;
  cgpa: number;
}

const ShareResults: React.FC<ShareResultsProps> = ({ semesterGPA, cgpa }) => {
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareText = `My semester GPA is ${semesterGPA.toFixed(2)} and my CGPA is ${cgpa.toFixed(2)} 🎓✨ Calculate yours at the OpenVerse CGPA Predictor!`;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My CGPA Results',
        text: shareText,
        url: window.location.href,
      })
      .catch((error) => console.log('Error sharing', error));
    } else {
      setShowShareOptions(!showShareOptions);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="mt-4">
      <Button 
        onClick={handleShare} 
        className="w-100 d-flex align-items-center justify-content-center"
        style={{ 
          backgroundColor: 'rgba(200, 162, 200, 0.2)',
          borderColor: '#c8a2c8',
          color: '#c8a2c8'
        }}
      >
        <FaShareAlt className="me-2" /> Share Your Results
      </Button>

      {showShareOptions && (
        <div className="mt-3 formula-box p-3">
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={3}
              value={shareText}
              readOnly
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                borderColor: '#c8a2c8',
                color: '#fff'
              }}
            />
          </Form.Group>
          
          <Row>
            <Col>
              <Button 
                onClick={copyToClipboard} 
                className="w-100"
                style={{ 
                  backgroundColor: copied ? 'rgba(200, 162, 200, 0.4)' : 'rgba(200, 162, 200, 0.2)',
                  borderColor: '#c8a2c8',
                  color: '#c8a2c8'
                }}
              >
                {copied ? (
                  <>
                    <FaCheck style={{ marginRight: '8px' }} /> Copied!
                  </>
                ) : (
                  <>
                    <FaClipboard style={{ marginRight: '8px' }} /> Copy Text
                  </>
                )}
              </Button>
            </Col>
          </Row>
          
          {copied && (
            <Alert className="mt-3" variant="success" style={{ backgroundColor: 'rgba(25, 135, 84, 0.2)', borderColor: '#198754' }}>
              Text copied to clipboard!
            </Alert>
          )}
        </div>
      )}
    </div>
  );
};

export default ShareResults;


