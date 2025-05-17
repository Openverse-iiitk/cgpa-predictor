import React, { useState } from 'react';
import { Row, Col, Form, Badge, Button } from 'react-bootstrap';
import { Subject, gradeToPoint } from '../data/semesterData';

interface SubjectGradeInputProps {
  subject: Subject;
  onChange: (subject: Subject) => void;
}

const SubjectGradeInput: React.FC<SubjectGradeInputProps> = ({ subject, onChange }) => {
  const grades = Object.keys(gradeToPoint);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  
  const handleGradeChange = (grade: string) => {
    const points = gradeToPoint[grade];
    onChange({ ...subject, grade, points });
    
    // Show visual feedback when grade is changed
    setShowFeedback(true);
    setTimeout(() => setShowFeedback(false), 1500);
  };

  return (
    <div className="mb-3 formula-box p-3 rounded">
      <Row className="mb-3 align-items-center">
        <Col xs={12} sm={6}>
          <h3 className="fw-medium text-neon">{subject.name}</h3>
          <p className="text-muted fs-6">Credits: {subject.credits}</p>
        </Col>
        <Col xs={12} sm={6} className="text-sm-end">
          <Badge bg="primary" className={`py-2 px-3 fs-6 ${showFeedback ? 'animate-pulse' : ''}`}>
            {subject.grade || 'Not Set'}
          </Badge>
          {subject.points !== undefined && (
            <p className="text-muted mt-1 mb-0">Points: <span className="text-neon">{subject.points}</span></p>
          )}
        </Col>
      </Row>

      <div className="mt-4">
        <div className="d-flex justify-content-between mb-2">
          {grades.map(grade => (
            <span key={grade} className="text-center small text-neon" style={{ width: `${100 / grades.length}%` }}>
              {grade}
            </span>
          ))}
        </div>
        
        <Form.Range
          min={0}
          max={grades.length - 1}
          step={1}
          value={subject.grade ? grades.indexOf(subject.grade) : 0}
          onChange={(e) => handleGradeChange(grades[parseInt(e.target.value)])}
        />
        
        <div className="d-flex justify-content-between mt-3 grade-buttons">
          {grades.map(grade => (
            <Button
              key={grade}
              variant={subject.grade === grade ? 'primary' : 'outline-info'}
              size="sm"
              className="rounded-circle d-flex align-items-center justify-content-center semester-btn"
              style={{ width: '32px', height: '32px' }}
              onClick={() => handleGradeChange(grade)}
            >
              {grade.replace('-', '')}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectGradeInput;


