import React from 'react';
import { Button } from 'react-bootstrap';
import { Subject } from '../data/semesterData';
import SubjectGradeInput from './SubjectGradeInput';

interface SubjectListProps {
  subjects: Subject[];
  onSubjectChange: (updatedSubject: Subject) => void;
}

const SubjectList: React.FC<SubjectListProps> = ({ subjects, onSubjectChange }) => {
  
  // Function to reset all grades
  const handleResetAll = () => {
    subjects.forEach(subject => {
      onSubjectChange({ ...subject, grade: undefined, points: undefined });
    });
  };
  
  // Check if any subject has a grade set
  const hasGrades = subjects.some(subject => subject.grade !== undefined);

  return (
    <div className="mb-4 semester-selector-container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fs-4 fw-semibold mb-0 text-neon">Enter Expected Grades</h2>
        {hasGrades && (
          <Button 
            variant="outline-info" 
            size="sm"
            onClick={handleResetAll}
            className="semester-btn"
          >
            Reset All
          </Button>
        )}
      </div>
      <div className="d-flex flex-column gap-3">
        {subjects.map((subject, index) => (
          <SubjectGradeInput
            key={index}
            subject={subject}
            onChange={onSubjectChange}
          />
        ))}
      </div>
    </div>
  );
};

export default SubjectList;
