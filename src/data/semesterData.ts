// filepath: /home/manvith/code/Openverse/cgpapredictor/src/data/semesterData.ts
export interface Subject {
  name: string;
  credits: number;
  grade?: string;
  points?: number;
}

export interface Branch {
  id: string;
  name: string;
}

export interface Semester {
  id: number;
  name: string;
  subjects: Record<string, Subject[]>;
  commonSubjects?: Subject[];
}

export const BRANCHES: Branch[] = [
  { id: "cse", name: "Computer Science Engineering" },
  { id: "ece", name: "Electronics & Communication Engineering" },
  { id: "csy", name: "Cyber Security" },
  { id: "AIDS", name: "Artificial Intelligence and Data Science" }
];

export const gradeToPoint: Record<string, number> = {
  "A": 10,
  "A-": 9,
  "B": 8,
  "B-": 7,
  "C": 6,
  "C-": 5,
  "D": 4,
  "F": 0
};

export const SEMESTERS: Semester[] = [
  {
    id: 1,
    name: "Semester 1",
    commonSubjects: [
      { name: "Communication Skills", credits: 3 },
      { name: "Foreign Language", credits: 1 },
      {name: "Discrete Mathematics", credits: 4},
      { name: "Computer Programming I", credits: 5 },
      { name: "Electronic Circuits", credits: 5 }
    ],
    subjects: {
      "cse": [
        
        { name: "IT Workshop I", credits: 5 },
        
        
      ],
      "ece": [
               
        { name: "Network theory", credits: 4 }
      ],
      "csy": [
        { name: "IT Workshop I", credits: 5 },

      ],
      "AIDS": [
        { name: "IT Workshop I", credits: 5 },
        
      ]
    }
  },
  {
    id: 2,
    name: "Semester 2",
    commonSubjects: [
      { name: "Personality Development", credits: 1 },
       { name: "Calculus and Linear Algebra", credits: 4 },
        { name: "Digital Design and Electric Circuits", credits: 5 },
        { name: "Data Structures I", credits: 5 },
        { name: "Computer Organization", credits: 4 }
    ],
    subjects: {
      "cse": [
       
        { name: "IT Workshop II", credits: 4 }
      ],
      "ece": [
        { name: "Signals and systems", credits: 4 },
      ],
      "csy": [
        
        { name: "IT Workshop II", credits: 4 }
      ],
      "AIDS": [
        { name: "IT Workshop II", credits: 4}
      ]
    }
  },
  {
    id: 3,
    name: "Semester 3",
    commonSubjects: [
     
      { name: "Probability, Statistics and Random Processes", credits: 4 },
    ],
    subjects: {
      "cse": [
        { name: "Introduction to Bioinformatics", credits: 2 },
        { name: "Design and Analysis of Algorithms", credits: 4 },
        { name: "Operating System", credits: 4 },
        { name: "Database Management Systems", credits: 4 },
        { name: "IT Workshop III", credits: 4 },
        { name: "Data Structures II", credits: 2 }
      ],
      "ece": [
        { name: "Control Systems", credits: 4 },
        { name: "Microprocessors and Microcontrollers", credits: 4 },
        { name: "Analog Electronics", credits: 4 },
        { name: "Data-Structures II", credits: 2 },
        { name: "Principles of Communication", credits: 4 },
        { name: "Linear Integrated Circuits", credits: 3 }
      ],
      "csy": [
       { name: "Design and Analysis of Algorithms", credits: 4 },
        { name: "Operating System", credits: 4 },
        { name: "Database Management Systems", credits: 4 },
        { name: "IT Workshop III", credits: 4 },
        { name: "Data Structures II", credits: 2 },
        { name: "Quantum Computing and Security", credits: 2 }
      ],
      "AIDS": [
       { name: "Design and Analysis of Algorithms", credits: 4 },
        { name: "Operating System", credits: 4 },
        { name: "Database Management Systems", credits: 4 },
        { name: "IT Workshop III", credits: 4 },
        { name: "Data Structures II", credits: 2 },
        { name: "Introduction to Cognitive Science", credits: 2 }
      ]
    }
  },
  {
    id: 4,
    name: "Semester 4",
    commonSubjects: [
     
    ],
    subjects: {
      "cse": [
         { name: "Fundamentals of Economics", credits: 1 },
      { name: "Principles of Management", credits: 1 },
      { name: "Differential Equations and Transforms", credits: 4 },
      { name: "Computer Networks", credits: 4 },
      { name: "Data Structures III", credits: 2 },
      { name: "Theory of Computation", credits: 4 },
      { name: "Object-Oriented Analysis and Design", credits: 4 },
      { name: "Compiler Design", credits: 4 }
    ],
    "ece": [
       { name: "Fundamentals of Economics", credits: 1 },
      { name: "Principles of Management", credits: 1 },
      { name: "Differential Equations and Transforms", credits: 4 },
      { name: "Computer Networks", credits: 4 },
      { name: "Data Structures III", credits: 2 },
      { name: "Digital design with Hardware descriptive languages", credits: 4 },
      { name: "Digital Communication", credits: 4 },
      { name: "Electromagnetic theory", credits: 4 }
    ],
    "csy": [
       { name: "Fundamentals of Economics", credits: 1 },
      { name: "Risk Management", credits: 1 },
      { name: "Differential Equations and Transforms", credits: 4 },
      { name: "Computer Networks", credits: 4 },
      { name: "Data Structures III", credits: 2 },
      { name: "Theory of Computation", credits: 4 },
      { name: "Secure Software engineering", credits: 4 },
      { name: "Compiler Design", credits: 4 }
      ],
      "AIDS": [
       { name: "Fundamentals of Economics", credits: 1 },
      { name: "Principles of Management", credits: 1 },
      { name: "Differential Equations and Transforms", credits: 4 },
      { name: "Computer Networks", credits: 4 },
      { name: "Data Structures III", credits: 2 },
      { name: "Theory of Computation", credits: 4 },
      { name: "Object-Oriented Analysis and Design", credits: 4 },
      { name: "Compiler Design", credits: 4 }
      ]
      
    }
  },
  {
    id: 5,
    name: "Semester 5",
    commonSubjects: [
   
    ],
    subjects: {
      "cse": [
        { name: "Artificial Intelligence", credits: 4 },
        { name: "Software Engineering and Program development", credits: 4 },
        { name: "Parallel and Distriubted Computing", credits: 4 },
        {name: "Digital signal processing", credits: 4 }, 
        { name: "Soft Computing", credits: 3 },
        { name: "HR Management", credits: 1 },
        { name: "Financial Management", credits: 1},
        { name: "Supply chain Management", credits: 1 }

      ],
      "ece": [
        { name: "Artificial Intelligence", credits: 4 },
        { name: "VLSI Design", credits: 4 },
        { name: "Digital Signal Processing and its Applications", credits: 4 },
        { name: "Information Theory and coding", credits: 3 },
        { name: "Microwave Engineering", credits: 4 },
        { name: "HR Management", credits: 1 },
        { name: "Financial Management", credits: 1 },
        { name: "Supply chain Management", credits: 1 }
      ],
      "csy": [
        { name: "Network security, iot and wireless security", credits: 4 },
        { name: "database security", credits: 3 },
        { name: "Distriubted System Security", credits: 4 },
        { name: "Fundamental of Data Science", credits: 4 },
        { name: "Number theory and Mathamatical Theory of coding", credits: 3 },
        { name: "financial crime , motivations and typologies", credits: 3 },
        { name: "Introduction to Artifical Intelligence", credits: 1 },
       
      ],
      "AIDS": [
        { name: "Artificial Intelligence", credits: 4 },
        { name: "Optimization Techniques for Data Science", credits: 4 },
        { name: "Parallel and Distriubted Computing", credits: 4 },
        { name: "Digital signal processing", credits: 4 },
        { name: "Software Engineering and project management", credits: 3 },
        { name: "HR Management", credits: 1 },
        { name: "Financial Management", credits: 1},
        { name: "Supply chain Management", credits: 1 }
    ]
  }
  },
  {
    id: 6,
    name: "Semester 6",
    commonSubjects: [
     
    ],
    subjects: {
      "cse": [
        { name: "Microprocessors", credits: 4 },
        { name: "Cloud Computing", credits: 4 },
        { name: "Machine Learning", credits: 3 },
        { name: "Data WareHousing and Data Mining", credits: 3 },
        { name: "High Performance and scientific computing", credits: 4 },
        { name: "Software Design Patterns", credits: 3 },
      ],
      "ece": [
        { name: "Internet Of Things", credits: 4 },
        { name: "Embedded Systems", credits: 4 },
        { name: "Advanced Digital Signal Processing", credits: 3 },
        { name: "Wireless Sensor Networks", credits: 3 },
        { name: "Machine Learning", credits: 3 },
        { name: "High Performance and Scientific Computing", credits: 3 },
      ],
       "csy": [
        { name: "Machine Learning and Cyber Security", credits: 3 },
        { name: "Digital Forensics", credits: 4 },
         { name: "Cloud Computing", credits: 4 },
         { name: "Cryptography", credits: 4 },
         { name: "Criminal Psychology and Behavioural Analysis", credits: 3 },
        { name: "Information Security Standards, Policies, Strategies and Audits", credits: 3 }
      ],
      "AIDS": [
        
        { name: "Microprocessors", credits: 4 },
        { name: "Cloud Computing", credits: 4 },
        { name: "Machine Learning", credits: 3 },
        { name: "Data WareHousing and Data Mining", credits: 3 },
        { name: "Introduction To Network Science and analytics", credits: 3 },
        { name: "Introduction to DevOps and MicroControllers", credits: 4 },
      ]
    }
  },
  {
    id: 7,
    name: "Semester 7",
    commonSubjects: [
      
    ],
    subjects: {
      "cse": [
        { name: "Computer Graphics", credits: 4 },
        { name: "Big Data and Large-Scale Computing", credits: 4 },
        { name: "Cryptography and Network Security", credits: 4 },
        { name: "BlockChain and CryptoCurrencies", credits: 3 },
        { name: "BTech Project Phase I", credits: 6 }
      ],
      "ece": [
        { name: "FPGA Based Design System", credits: 4 },
        { name: "Antenna Theory and Design", credits: 4 },
        { name: "Digital Image Processing", credits: 4 },
        { name: "Wireless and Cellular Communications", credits: 4 },
        { name: "BTech Project Phase I", credits: 6 }
      ],
       "csy": [
        { name: "Mobile Forensics and Security", credits: 4 },
        { name: "Multimedia Security and forensics", credits: 4 },
         { name: "BlockChain and CryptoCurrencies", credits: 3 },
        { name: "Penetration testing", credits: 4 },
        { name: "BTech Project Phase I", credits: 6 }
      ],
      "AIDS": [
        
        { name: "fuck around and find out", credits: 6 },
        { name: "like- aids is not there for sem7 bro why are u here.", credits: 6 }
      ]
      
    }
  },
  {
    id: 8,
    name: "Semester 8",
    commonSubjects: [

      { name: "B.Tech Project Phase II", credits: 6 }
     
    ],
    subjects: {
      "cse": [
        { name: "Applied Predictive Analytics", credits: 3 },
        { name: "Internet of things", credits: 4 },
        { name: "Deep learning", credits: 3 },
        
      ],
      "ece": [
        { name: "Data Compression", credits: 3 },
        { name: "Deep Learning", credits: 3 },
        { name: "Robotics and Automation", credits: 4 }

      ],
      "csy": [
        { name: "Cyber Ethics , privacy and Legal issues", credits: 3 },
        { name: "Biometric Security", credits: 4 ,},
        { name: "Lightweight Cryptography", credits: 3 }
      ],
      "AIDS": [
        
        { name: "fuck around and find out", credits: 6 },
        { name: "like- aids is not there for sem8 bro why are u here.", credits: 6 }
      ]
  }
}
];
