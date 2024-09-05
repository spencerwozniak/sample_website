// Importing React and useEffect hook
import React, { useEffect } from 'react';

// Defining the props (properties) that the Communicate component will accept
interface CommunicateProps {
  answer: string;  // 'answer' is a string that will be submitted to the server.
  setResponse: (response: string, audioUrls?: string[]) => void;  // 'setResponse' is a function to set the response message and optional audio URLs.
  setIsSubmitting: (isSubmitting: boolean) => void;  // 'setIsSubmitting' is a function to manage the form's submitting state (true or false).
}

// Defining the Communicate functional component, typed with React.FC (Functional Component) and accepting the CommunicateProps as props.
const Communicate: React.FC<CommunicateProps> = ({ answer, setResponse, setIsSubmitting }) => {

  // useEffect hook is used to perform side effects, such as fetching data from an API, when the component is rendered or when 'answer' changes.
  useEffect(() => {
    // Check if the 'answer' string is not empty after trimming any spaces.
    if (answer.trim() !== '') {
      setIsSubmitting(true);  // Set the submitting state to true when the answer is being processed.

      // Send a POST request to the server with the 'answer' data.
      fetch('http://localhost:5000/submit', {  // The fetch call sends the 'answer' to the server at this endpoint.
        method: 'POST',  // We are sending data, so we use the POST method.
        headers: { 'Content-Type': 'application/json' },  // Specify that the data is in JSON format.
        body: JSON.stringify({ answer })  // Convert the 'answer' object to a JSON string and include it in the request body.
      })
        // Once the server responds, convert the response to JSON format.
        .then(res => res.json())
        // After receiving the JSON data from the server, we process it.
        .then(data => {
          // Call the 'setResponse' function with the response message and optional audio URLs from the server.
          setResponse(data.message, data.audioUrls);
          setIsSubmitting(false);  // Set submitting state to false, since the form submission is complete.
        })
        // If there is an error during the fetch request, handle it here.
        .catch(() => {
          // Set an error message and an empty array for audio URLs if the request fails.
          setResponse('An error occurred while submitting the form.', []);
          setIsSubmitting(false);  // Set submitting state to false since the process has failed.
        });
    } else {
      // If the 'answer' is an empty string, set submitting state to false.
      setIsSubmitting(false);
    }
  }, [answer]);  // The useEffect hook will run again if the 'answer' value changes.

  return null;  // This component doesn't render anything to the UI, so it returns null.
};

export default Communicate;  // Export the Communicate component to be used elsewhere in the app.
