import React from 'react'; // Import React library to create and manage the component
import './LoadingCircle.css'; // Import styles for the LoadingCircle

// Define a functional component named 'LoadingCircle'
const LoadingCircle: React.FC = () => {
  // The component renders a div with a nested div inside it
  return (
    // The outer div serves as a container for positioning and styling the loading circle
    <div className="loading-container">
      <div className="loading-circle"></div>
    </div>
  );
}

export default LoadingCircle; // Export the component so it can be used in other parts of the application
