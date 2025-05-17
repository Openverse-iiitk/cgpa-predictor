import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Semester } from '../data/semesterData';

interface SemesterSelectorProps {
  semesters: Semester[];
  selectedSemester: Semester | null;
  onSelectSemester: (semester: Semester) => void;
}

const SemesterSelector: React.FC<SemesterSelectorProps> = ({
  semesters,
  selectedSemester,
  onSelectSemester,
}) => {
  return (
    <div className="mb-4 semester-selector-container">
      <h2 className="fs-4 fw-semibold mb-3 text-neon">Select Your Semester</h2>
      <Row xs={2} md={4} className="g-3">
        {semesters.map((semester) => (
          <Col key={semester.id}>
            <Button
              variant={selectedSemester?.id === semester.id ? 'primary' : 'outline-info'}
              className="w-100 py-2 semester-btn"
              onClick={() => onSelectSemester(semester)}
              style={{ 
                backgroundColor: selectedSemester?.id === semester.id ? 'rgba(200, 162, 200, 0.2)' : 'transparent',
                borderColor: '#c8a2c8',
                color: '#c8a2c8'
              }}
            >
              {semester.name}
            </Button>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SemesterSelector;
