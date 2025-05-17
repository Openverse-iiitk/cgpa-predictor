import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import SemesterSelector from './components/SemesterSelector';
import PreviousCGPAInput from './components/PreviousCGPAInput';
import SubjectList from './components/SubjectList';
import ResultCard from './components/ResultCard';
import LoadingSpinner from './components/LoadingSpinner';
import ParticlesBackground from './components/ParticlesBackground';
import { SEMESTERS, Subject, Semester } from './data/semesterData';
import { calculateSemesterGPA, calculateCGPA, getTotalCredits } from './utils/cgpaCalculator';

function App() {
  const [selectedSemester, setSelectedSemester] = useState<Semester | null>(null);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [previousCGPA, setPreviousCGPA] = useState<number>(0);
  const [previousCredits, setPreviousCredits] = useState<number>(0);
  const [semesterGPA, setSemesterGPA] = useState<number>(0);
  const [cgpa, setCGPA] = useState<number>(0);
  const [showPreviousCGPA, setShowPreviousCGPA] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  // Simulate loading state for better user experience
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // When semester is selected, reset subjects and update the show previous CGPA flag
  useEffect(() => {
    if (selectedSemester) {
      // Create a deep copy of the subjects to avoid modifying the original data
      const semesterSubjects = selectedSemester.subjects.map(subj => ({ ...subj }));
      setSubjects(semesterSubjects);
      setShowPreviousCGPA(selectedSemester.id > 1);
    }
  }, [selectedSemester]);

  // Calculate GPA and CGPA whenever subjects or previous CGPA changes
  useEffect(() => {
    try {
      const gpa = calculateSemesterGPA(subjects);
      setSemesterGPA(gpa);

      const totalCredits = getTotalCredits(subjects);
      const calculatedCGPA = calculateCGPA(gpa, totalCredits, previousCGPA, previousCredits);
      setCGPA(calculatedCGPA);
    } catch (error) {
      console.error("Error calculating GPA:", error);
      // If there's an error, set default values
      setSemesterGPA(0);
      setCGPA(0);
    }
  }, [subjects, previousCGPA, previousCredits]);

  // Update a subject when grade changes
  const handleSubjectChange = (updatedSubject: Subject) => {
    setSubjects(prevSubjects => 
      prevSubjects.map(subject => 
        subject.name === updatedSubject.name ? updatedSubject : subject
      )
    );
  };

  return (
    <div className="page-container">
      <ParticlesBackground />
      <header className="app-header">
        <Container>
          <h1 className="fs-3 fw-bold">College CGPA Predictor</h1>
          <p className="mb-0 text-white-50">Predict your future academic performance</p>
        </Container>
      </header>

      <main className="main-content">
        <Container>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <Row>
              <Col lg={10} className="mx-auto">
                <SemesterSelector 
                  semesters={SEMESTERS} 
                  selectedSemester={selectedSemester} 
                  onSelectSemester={setSelectedSemester} 
                />

                {showPreviousCGPA && (
                  <PreviousCGPAInput
                    previousCGPA={previousCGPA}
                    setPreviousCGPA={setPreviousCGPA}
                    previousCredits={previousCredits}
                    setPreviousCredits={setPreviousCredits}
                  />
                )}

                {selectedSemester && subjects.length > 0 && (
                  <SubjectList subjects={subjects} onSubjectChange={handleSubjectChange} />
                )}

                {selectedSemester && (
                  <div className="mt-4 mb-4">
                    <ResultCard 
                      semesterGPA={semesterGPA} 
                      cgpa={cgpa} 
                      totalCredits={previousCredits + getTotalCredits(subjects)} 
                    />
                  </div>
                )}

                <div className="mt-4 mb-4 p-4 bg-white rounded border">
                  <h2 className="fs-4 fw-semibold mb-3">How CGPA is Calculated</h2>
                  <p className="mb-2">The formula used for calculating CGPA is:</p>
                  <div className="bg-light p-3 rounded font-monospace small mb-3">
                    𝐶𝐺𝑃𝐴 = ∑(𝐶𝑖 × 𝐺𝑃𝑖) / ∑𝐶𝑖
                  </div>
                  <p className="mb-2">Where:</p>
                  <ul className="list-unstyled ps-3">
                    <li>• 𝐶𝑖 = Credits for each course</li>
                    <li>• 𝐺𝑃𝑖 = Grade points obtained in each course</li>
                    <li>• ∑ = Sum of all courses</li>
                  </ul>
                  <div className="mt-3">
                    <h3 className="fs-5 fw-medium mb-2">Grade to Point Conversion:</h3>
                    <Row xs={2} md={4} className="g-2">
                      <Col><div className="bg-light p-2 rounded text-center">A = 10 points</div></Col>
                      <Col><div className="bg-light p-2 rounded text-center">A- = 9 points</div></Col>
                      <Col><div className="bg-light p-2 rounded text-center">B = 8 points</div></Col>
                      <Col><div className="bg-light p-2 rounded text-center">B- = 7 points</div></Col>
                      <Col><div className="bg-light p-2 rounded text-center">C = 6 points</div></Col>
                      <Col><div className="bg-light p-2 rounded text-center">C- = 5 points</div></Col>
                      <Col><div className="bg-light p-2 rounded text-center">D = 4 points</div></Col>
                      <Col><div className="bg-light p-2 rounded text-center">F = 0 points</div></Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </main>
      
      <footer className="app-footer text-center">
        <Container>
          <p className="mb-1">© {new Date().getFullYear()} College CGPA Predictor | All Rights Reserved</p>
          <p className="small text-muted mb-0">
            This tool is designed to help students predict their academic performance.
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default App;


