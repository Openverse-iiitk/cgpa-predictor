# College CGPA Predictor

A responsive, mobile-friendly modern web application for predicting CGPA (Cumulative Grade Point Average) for college students. This tool allows students to input expected grades for their current semester subjects and calculate their projected CGPA.

![College CGPA Predictor Screenshot](https://via.placeholder.com/800x400?text=College+CGPA+Predictor)

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

The application uses the following grade to point conversion system:

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

## CGPA Calculation Formula

The formula used for calculating CGPA is:

𝐶𝐺𝑃𝐴 = ∑(𝐶𝑖 × 𝐺𝑃𝑖) / ∑𝐶𝑖

Where:
- 𝐶𝑖 = Credits for each course
- 𝐺𝑃𝑖 = Grade points obtained in each course
- ∑ = Sum of all courses

## Development

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/cgpapredictor.git
   cd cgpapredictor
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

### Building for Production

To create a production-optimized build:

```
npm run build
```

The build output will be in the `build` directory.

### Deployment

You can deploy this application to platforms like Netlify, Vercel, or GitHub Pages.

Example deployment to GitHub Pages:

1. Install the GitHub Pages package:
   ```
   npm install --save-dev gh-pages
   ```

2. Add these scripts to package.json:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```

3. Deploy the application:
   ```
   npm run deploy
   ```

## License

MIT

Where:
- 𝐶𝑖 = Credits for each course
- 𝐺𝑃𝑖 = Grade points obtained in each course
- ∑ = Sum of all courses

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

## Deployment Options

You can deploy this application to various platforms:

### 1. Netlify

1. Create an account on [Netlify](https://www.netlify.com/)
2. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
3. Build and deploy:
   ```bash
   npm run build
   netlify deploy --prod
   ```

### 2. Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Deploy:
   ```bash
   vercel
   ```

### 3. GitHub Pages

1. Install GitHub Pages package:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/cgpapredictor",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy:
   ```bash
   npm run deploy
   ```

## Optimization Features

- CSS animations for better user feedback
- Error handling for form inputs
- Mobile-first design approach
- Responsive layout for all screen sizes
- Informative tooltips and instructions
