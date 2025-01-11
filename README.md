Multi-Step Form - Front-End Developer Technical Test
This is my implementation of the multi-step form challenge provided by Clan Africa. The project was built with React, using modern tools and best practices to ensure a seamless user experience.

Features
Core Functionalities:
Step-by-Step Navigation:

Users can complete each step of the form sequence.
Users can navigate back to previous steps to update their input.
A summary of user selections is displayed on the final step for confirmation.
Responsive Design:

The layout adjusts seamlessly for different device screen sizes.
Ensures an optimal experience for both desktop and mobile users.
Form Validation:

Validation using Yup ensures:
Required fields are not missed.
Email addresses are properly formatted.
A step cannot be submitted without valid input.
Interactive Feedback:

Hover and focus states are implemented for all interactive elements.
Clear error messages are displayed for validation failures.
Technical Implementation:
React-Formik: For form state management and validation.
Yup: For schema-based form validation.
React-Redux: Used for managing global state, ensuring that user selections persist across form steps.
Switch-Case Rendering: Dynamically renders the appropriate step of the form on a single page without navigation.
Tools and Technologies
Framework: React.js
State Management: Redux
Form Handling: Formik
Validation: Yup
CSS: TailwindCSS for styling (or any styling method you used)
Deployment: [Platform Name (e.g., Netlify, Vercel)]
File Structure
css
Copy code
src/
├── components/
│ ├── StepOne.jsx
│ ├── StepTwo.jsx
│ ├── StepThree.jsx
│ ├── Summary.jsx
├── redux/
│ ├── store.js
│ ├── formSlice.js
├── utils/
│ ├── validationSchemas.js
├── App.js
├── index.js

components/: Contains React components for each form step and summary.
redux/: Contains the Redux store and slice for managing the application state.
utils/: Includes validation schemas for form inputs.
Setup and Installation
To Run the Project Locally:
Clone the repository:
bash
Copy code
git clone (https://github.com/Uthmancoder/interview-accessment.git)
Navigate to the project directory:
bash
Copy code
cd multi-step-form
Install dependencies:
bash
Copy code
npm install
Start the development server:
bash
Copy code
npm run dev
The application will be available at http://localhost:5173.

Live Demo
The project has been deployed for easy access and testing: (https://interview-accessment.vercel.app/)

How It Works
Step Navigation:
Each form step is displayed conditionally using a switch statement based on the current step.
Form Validation:
Each form step has its own validation schema, ensuring accurate user input.
State Persistence:
User selections are stored in Redux, making them accessible across steps and for the summary page.
Additional Notes
Design: The form adheres closely to the provided design files, replicating the look and feel of the static images.
Accessibility: All interactive elements are keyboard navigable and include focus styles.
