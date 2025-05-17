# College CGPA Predictor

A responsive, mobile-friendly modern web application for predicting CGPA (Cumulative Grade Point Average) for college students. This tool allows students to input expected grades for their current semester subjects and calculate their projected CGPA.


## Features

- Select from any of the 8 semesters
- Input previous CGPA for advanced semesters
- View and modify grades for current semester subjects
- Calculate semester GPA and cumulative GPA
- Mobile-responsive design
- Share results with others
- Input validation and error handling
- Visual feedback with animations

## How to Use

1. **Select Your Semester**: Choose which semester you want to calculate CGPA for.
2. **Enter Previous Academic Record** (if applicable): If you're in semester 2 or higher, enter your previous CGPA and total earned credits.
3. **Set Expected Grades**: Use the sliders or grade buttons to set your expected grade for each subject.
4. **View Results**: Your semester GPA and cumulative GPA will be automatically calculated and displayed.
5. **Share Your Results**: Use the share button to copy or share your predicted academic performance.


## Grade to Point Conversion

| Grade | Points |
|-------|--------|
| A     | 10     |
| A-    | 9      |
| B     | 8      |
| B-    | 7      |
| C     | 6      |
| C-    | 5      |
| D     | 4      |
| F     | 0      |

## Tech Stack

- React.js with TypeScript
- Bootstrap 5 for styling and components
- React-Bootstrap for component library
- Modern ES6+ JavaScript
- Responsive design principles
- Modular component architecture

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/cgpapredictor.git
   cd cgpapredictor
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm start
   ```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Building for Production

```bash
npm run build
```

This command builds the app for production to the `build` folder, optimizing it for the best performance.

## Optimization Features

- CSS animations for better user feedback
- Error handling for form inputs
- Mobile-first design approach
- Responsive layout for all screen sizes
- Informative tooltips and instructions
