import { Subject } from "../data/semesterData";

// Calculate GPA for a single semester
export const calculateSemesterGPA = (subjects: Subject[]): number => {
  let totalPoints = 0;
  let totalCredits = 0;

  subjects.forEach(subject => {
    if (subject.points !== undefined && subject.points >= 0) {
      totalPoints += subject.points * subject.credits;
      totalCredits += subject.credits;
    }
  });

  return totalCredits > 0 ? totalPoints / totalCredits : 0;
};

// Calculate cumulative GPA
export const calculateCGPA = (
  currentSemesterGPA: number,
  currentSemesterCredits: number,
  previousCGPA: number = 0,
  previousCredits: number = 0
): number => {
  const totalCredits = previousCredits + currentSemesterCredits;
  const totalPoints = (previousCGPA * previousCredits) + (currentSemesterGPA * currentSemesterCredits);
  
  return totalCredits > 0 ? totalPoints / totalCredits : 0;
};

// Get total credits for a list of subjects
export const getTotalCredits = (subjects: Subject[]): number => {
  return subjects.reduce((total, subject) => total + subject.credits, 0);
};

// Format GPA to display with 2 decimal places
export const formatGPA = (gpa: number): string => {
  return gpa.toFixed(2);
};
