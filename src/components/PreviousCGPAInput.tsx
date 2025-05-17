import React, { useState } from 'react';
import { Card, Form, Row, Col, Alert } from 'react-bootstrap';

interface PreviousCGPAInputProps {
  previousCGPA: number;
  setPreviousCGPA: (cgpa: number) => void;
  previousCredits: number;
  setPreviousCredits: (credits: number) => void;
}

const PreviousCGPAInput: React.FC<PreviousCGPAInputProps> = ({
  previousCGPA,
  setPreviousCGPA,
  previousCredits,
  setPreviousCredits,
}) => {
  const [cgpaError, setCgpaError] = useState<string>('');
  const [creditsError, setCreditsError] = useState<string>('');

  const handleCGPAChange = (value: string) => {
    const cgpa = parseFloat(value) || 0;
    if (cgpa < 0 || cgpa > 10) {
      setCgpaError('CGPA must be between 0 and 10');
    } else {
      setCgpaError('');
    }
    setPreviousCGPA(cgpa);
  };

  const handleCreditsChange = (value: string) => {
    const credits = parseInt(value) || 0;
    if (credits < 0) {
      setCreditsError('Credits cannot be negative');
    } else {
      setCreditsError('');
    }
    setPreviousCredits(credits);
  };

  return (
    <Card className="mb-4 bg-light">
      <Card.Body>
        <h2 className="fs-4 fw-semibold mb-3">Previous Academic Record</h2>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="previousCGPA">Previous CGPA</Form.Label>
              <Form.Control
                id="previousCGPA"
                type="number"
                min="0"
                max="10"
                step="0.01"
                value={previousCGPA}
                onChange={(e) => handleCGPAChange(e.target.value)}
                placeholder="Enter your previous CGPA (0-10)"
                isInvalid={!!cgpaError}
              />
              {cgpaError ? (
                <Form.Control.Feedback type="invalid">
                  {cgpaError}
                </Form.Control.Feedback>
              ) : (
                <Form.Text className="text-muted">
                  Enter your CGPA from previous semesters (0-10)
                </Form.Text>
              )}
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="previousCredits">Total Credits Earned</Form.Label>
              <Form.Control
                id="previousCredits"
                type="number"
                min="0"
                step="1"
                value={previousCredits}
                onChange={(e) => handleCreditsChange(e.target.value)}
                placeholder="Enter total credits earned"
                isInvalid={!!creditsError}
              />
              {creditsError ? (
                <Form.Control.Feedback type="invalid">
                  {creditsError}
                </Form.Control.Feedback>
              ) : (
                <Form.Text className="text-muted">
                  Enter the total number of credits earned in previous semesters
                </Form.Text>
              )}
            </Form.Group>
          </Col>
        </Row>
        {(previousCGPA > 0 && previousCredits === 0) && (
          <Alert variant="warning" className="mt-2">
            Please enter your total credits if you have a previous CGPA.
          </Alert>
        )}
      </Card.Body>
    </Card>
  );
};

export default PreviousCGPAInput;


