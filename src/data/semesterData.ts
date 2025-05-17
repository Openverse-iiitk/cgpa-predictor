export interface Subject {
  name: string;
  credits: number;
  grade?: string;
  points?: number;
}

export interface Semester {
  id: number;
  name: string;
  subjects: Subject[];
}

export const gradeToPoint: Record<string, number> = {
  'A': 10,
  'A-': 9,
  'B': 8,
  'B-': 7,
  'C': 6,
  'C-': 5,
  'D': 4,
  'F': 0
};

export const SEMESTERS: Semester[] = [
  {
    id: 1,
    name: 'Semester 1',
    subjects: [
      { name: 'Discrete Mathematics', credits: 4 },
      { name: 'IT Workshop I', credits: 5 },
      { name: 'Computer Programming I', credits: 5 },
      { name: 'Electronic Circuits', credits: 5 },
      { name: 'Communication Skills', credits: 3 },
      { name: 'Foreign Language', credits: 1 }
    ]
  },
  {
    id: 2,
    name: 'Semester 2',
    subjects: [
      { name: 'Calculus and Linear Algebra', credits: 4 },
      { name: 'Digital Design and Electric Circuits', credits: 5 },
      { name: 'Data Structures I', credits: 5 },
      { name: 'Computer Organization', credits: 4 },
      { name: 'IT Workshop II', credits: 4 },
      { name: 'Personality Development', credits: 1 }
    ]
  },
  {
    id: 3,
    name: 'Semester 3',
    subjects: [
      { name: 'Probability, Statistics and Random Processes', credits: 4 },
      { name: 'Design and Analysis of Algorithms', credits: 4 },
      { name: 'Operating System', credits: 4 },
      { name: 'Database Management Systems', credits: 4 },
      { name: 'IT Workshop III', credits: 4 },
      { name: 'Introduction to Bioinformatics', credits: 2 },
      { name: 'Data Structures II', credits: 2 }
    ]
  },
  {
    id: 4,
    name: 'Semester 4',
    subjects: [
      { name: 'Differential Equations and Transforms', credits: 4 },
      { name: 'Theory of Computation', credits: 4 },
      { name: 'Object-Oriented Analysis and Design', credits: 4 },
      { name: 'Compiler Design', credits: 4 },
      { name: 'Computer Networks', credits: 4 },
      { name: 'Data Structures III', credits: 2 },
      { name: 'Fundamentals of Economics', credits: 1 },
      { name: 'Principles of Management', credits: 1 }
    ]
  },
  {
    id: 5,
    name: 'Semester 5',
    subjects: [
      { name: 'Bouquet Core I', credits: 4 },
      { name: 'Bouquet Core II', credits: 4 },
      { name: 'CS Elective I', credits: 4 },
      { name: 'Engineering Elective', credits: 4 },
      { name: 'Mathematics Elective', credits: 3 },
      { name: 'Humanities Elective I', credits: 1 },
      { name: 'Humanities Elective II', credits: 1 },
      { name: 'Humanities Elective III', credits: 1 }
    ]
  },
  {
    id: 6,
    name: 'Semester 6',
    subjects: [
      { name: 'Bouquet Core III', credits: 4 },
      { name: 'Bouquet Core IV', credits: 4 },
      { name: 'CS Elective II', credits: 4 },
      { name: 'CS Elective III', credits: 3 },
      { name: 'Science Elective', credits: 3 },
      { name: 'Institute Open Elective I', credits: 3 }
    ]
  },
  {
    id: 7,
    name: 'Semester 7',
    subjects: [
      { name: 'Bouquet Core V', credits: 4 },
      { name: 'Bouquet Core VI', credits: 4 },
      { name: 'CS Elective IV', credits: 4 },
      { name: 'Institute Open Elective II', credits: 3 },
      { name: 'B.Tech Project Phase I', credits: 6 }
    ]
  },
  {
    id: 8,
    name: 'Semester 8',
    subjects: [
      { name: 'CS Elective V', credits: 3 },
      { name: 'CS Elective VI / Industrial Training', credits: 4 },
      { name: 'Institute Open Elective III', credits: 3 },
      { name: 'B.Tech Project Phase II', credits: 6 }
    ]
  }
];
