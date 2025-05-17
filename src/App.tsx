import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import SemesterSelector from './components/SemesterSelector';
import BranchSelector from './components/BranchSelector';
import PreviousCGPAInput from './components/PreviousCGPAInput';
import SubjectList from './components/SubjectList';
import ResultCard from './components/ResultCard';
import LoadingSpinner from './components/LoadingSpinner';
import ParticlesBackground from './components/ParticlesBackground';
import { SEMESTERS, Subject, Semester, BRANCHES, Branch } from './data/semesterData';
import { calculateSemesterGPA, calculateCGPA, getTotalCredits } from './utils/cgpaCalculator';

function App() {
  const [selectedSemester, setSelectedSemester] = useState<Semester | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
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

  // When semester or branch is selected, reset subjects and update the show previous CGPA flag
  useEffect(() => {
    if (selectedSemester && selectedBranch) {
      // Get branch-specific and common subjects
      const branchSubjects = selectedSemester.subjects[selectedBranch.id] || [];
      const commonSubjects = selectedSemester.commonSubjects || [];
      
      // Combine both types of subjects
      const allSubjects = [...branchSubjects, ...commonSubjects].map(subj => ({ ...subj }));
      
      setSubjects(allSubjects);
      setShowPreviousCGPA(selectedSemester.id > 1);
    }
  }, [selectedSemester, selectedBranch]);

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
          <Row className="align-items-center">
            <Col xs={6} className="text-start">
              <div className="d-flex align-items-center">
                <img 
                  src={process.env.PUBLIC_URL + '/openverse2.svg'} 
                  alt="Openverse Logo" 
                  style={{ height: '45px', marginRight: '12px' }} 
                />
                <h1 className="fs-3 fw-bold mb-0">CGPA Predictor</h1>
              </div>
            </Col>
            <Col xs={6} className="text-end">
              <a 
                href="https://github.com/Openverse-iiitk/cgpa-predictor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-link"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="#0fe0ff"
                  style={{ transition: 'all 0.3s ease' }}
                  onMouseOver={(e) => e.currentTarget.style.fill = '#ffffff'} 
                  onMouseOut={(e) => e.currentTarget.style.fill = '#0fe0ff'}
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </Col>
          </Row>
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
                <BranchSelector 
                  branches={BRANCHES} 
                  selectedBranch={selectedBranch} 
                  onSelectBranch={setSelectedBranch} 
                />

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

                {selectedSemester && selectedBranch && subjects.length > 0 && (
                  <SubjectList subjects={subjects} onSubjectChange={handleSubjectChange} />
                )}

                {selectedSemester && selectedBranch && (
                  <div className="mt-4 mb-4">
                    <ResultCard 
                      semesterGPA={semesterGPA} 
                      cgpa={cgpa} 
                      totalCredits={previousCredits + getTotalCredits(subjects)} 
                    />
                  </div>
                )}

                <div className="mt-4 mb-4 p-4 info-card">
                  <h2 className="fs-4 fw-semibold mb-3 text-neon">How CGPA is Calculated</h2>
                  <p className="mb-2">The formula used for calculating CGPA is:</p>
                  <div className="formula-box p-3 rounded font-monospace small mb-3">
                    𝐶𝐺𝑃𝐴 = ∑(𝐶𝑖 × 𝐺𝑃𝑖) / ∑𝐶𝑖
                  </div>
                  <p className="mb-2">Where:</p>
                  <ul className="list-unstyled ps-3">
                    <li>• 𝐶𝑖 = Credits for each course</li>
                    <li>• 𝐺𝑃𝑖 = Grade points obtained in each course</li>
                    <li>• ∑ = Sum of all courses</li>
                  </ul>
                  <div className="mt-3">
                    <h3 className="fs-5 fw-medium mb-2 text-neon">Grade to Point Conversion:</h3>
                    <Row xs={2} md={4} className="g-2">
                      <Col><div className="grade-box p-2 rounded text-center">A = 10 points</div></Col>
                      <Col><div className="grade-box p-2 rounded text-center">A- = 9 points</div></Col>
                      <Col><div className="grade-box p-2 rounded text-center">B = 8 points</div></Col>
                      <Col><div className="grade-box p-2 rounded text-center">B- = 7 points</div></Col>
                      <Col><div className="grade-box p-2 rounded text-center">C = 6 points</div></Col>
                      <Col><div className="grade-box p-2 rounded text-center">C- = 5 points</div></Col>
                      <Col><div className="grade-box p-2 rounded text-center">D = 4 points</div></Col>
                      <Col><div className="grade-box p-2 rounded text-center">F = 0 points</div></Col>
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
          <p className="mb-0 neon-text">
            Made with <span style={{ color: '#ff0066' }}>❤️</span> by Openverse
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default App;


