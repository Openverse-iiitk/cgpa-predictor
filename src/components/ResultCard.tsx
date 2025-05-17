import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import ShareResults from './ShareResults';

interface ResultCardProps {
  semesterGPA: number;
  cgpa: number;
  totalCredits: number;
}

const ResultCard: React.FC<ResultCardProps> = ({ semesterGPA, cgpa, totalCredits }) => {
  const [prevSemesterGPA, setPrevSemesterGPA] = useState(semesterGPA);
  const [prevCGPA, setPrevCGPA] = useState(cgpa);
  const [semesterGPAChanged, setSemesterGPAChanged] = useState(false);
  const [cgpaChanged, setCGPAChanged] = useState(false);
  
  useEffect(() => {
    // Check if GPA values have changed
    if (prevSemesterGPA !== semesterGPA) {
      setSemesterGPAChanged(true);
      setTimeout(() => setSemesterGPAChanged(false), 2000);
      setPrevSemesterGPA(semesterGPA);
    }
    
    if (prevCGPA !== cgpa) {
      setCGPAChanged(true);
      setTimeout(() => setCGPAChanged(false), 2000);
      setPrevCGPA(cgpa);
    }
  }, [semesterGPA, cgpa, prevSemesterGPA, prevCGPA]);

  return (
    <div className="mb-4 semester-selector-container">
      <h2 className="fs-4 fw-semibold mb-3 text-neon">Your Results</h2>
      <Row className="mb-4">
        <Col md={6}>
          <div className={`formula-box mb-3 mb-md-0 ${semesterGPAChanged ? 'animate-pulse' : ''}`}>
            <p className="text-muted mb-1">Semester GPA</p>
            <p className="fs-1 fw-bold text-neon">{semesterGPA.toFixed(2)}</p>
          </div>
        </Col>
          
        <Col md={6}>
          <div className={`formula-box ${cgpaChanged ? 'animate-pulse' : ''}`}>
            <p className="text-muted mb-1">Cumulative GPA</p>
            <p className="fs-1 fw-bold text-neon">{cgpa.toFixed(2)}</p>
          </div>
        </Col>
      </Row>
      
      <div className="mb-4">
        <p className="text-muted mb-1">Total Credits</p>
        <p className="fs-4 fw-semibold text-neon">{totalCredits}</p>
      </div>
      
      <div className="formula-box mb-4">
        <p className="fw-medium text-neon">About Your CGPA</p>
        <p className="mb-0">
          {cgpa >= 9.0 && "Outstanding! You're achieving excellent results."}
          {cgpa >= 8.0 && cgpa < 9.0 && "Great job! You're performing very well."}
          {cgpa >= 7.0 && cgpa < 8.0 && "Good work! Keep up the consistent effort."}
          {cgpa >= 6.0 && cgpa < 7.0 && "Doing okay! Try to improve in some subjects."}
          {cgpa < 6.0 && "You might want to focus on improving your grades in key subjects."}
        </p>
      </div>
      
      <ShareResults semesterGPA={semesterGPA} cgpa={cgpa} />
    </div>
  );
};

export default ResultCard;


