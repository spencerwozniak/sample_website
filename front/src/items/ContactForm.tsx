// Import necessary libraries and components
import AOS from 'aos';  // AOS is a library for animating elements when they scroll into view.
import 'aos/dist/aos.css';  // Importing the CSS for AOS to apply animations.

import React, { useState, useEffect } from 'react';  // Importing React, along with useState and useEffect hooks.
import Communicate from '../components/Communicate'; // Importing a component for communication, possibly to handle form submissions.
import TempMsg from '../items/TempMsg';  // Importing a temporary message component to show feedback to the user.
import './ContactForm.css';  // Importing the CSS file that styles the contact form.

// The main ContactForm component, written as a functional component in TypeScript (React.FC stands for React Functional Component).
const ContactForm: React.FC = () => {

  // useEffect hook runs AOS initialization once when the component is first rendered.
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration set to 1000 milliseconds (1 second).
      once: true,  // The animation should happen only once.
    });
  }, []);  // The empty array ensures this only runs on the first render.

  // useState hook to manage form data. This sets up an object with empty values for each form field.
  const [formData, setFormData] = useState({
    firstname: '',   // First Name
    lastname: '',    // Last Name
    email: '',       // Email Address
    phone: '',       // Phone Number
    company: '',     // Organization/Company Name
    jobtitle: '',    // Job Title
    statelist: '',   // State (from a dropdown list)
    questions_or_comments: ''  // Any questions or comments from the user
  });

  // useState to manage the response message displayed to the user after submitting the form.
  const [responseMessage, setResponseMessage] = useState<string>('');

  // useState to track if the form is being submitted (used to show a loading indicator).
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // useState to track if the form is valid (all required fields filled).
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  // This useEffect checks if all required fields are filled to enable form submission.
  useEffect(() => {
    const isValid =
      formData.firstname &&
      formData.lastname &&
      formData.email &&
      formData.phone &&
      formData.company &&
      formData.jobtitle &&
      formData.statelist;
    setIsFormValid(isValid);  // If all fields are filled, the form is valid.
  }, [formData]);  // This effect runs whenever the formData changes.

  // Function to format phone numbers as the user types, adding parentheses and dashes.
  const formatPhoneNumber = (value: string) => {
    if (!value) return value;  // If the value is empty, return it as is.

    const phoneNumber = value.replace(/[^\d]/g, '');  // Remove any characters that are not numbers.
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return phoneNumber;  // If fewer than 4 digits, return as is.
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;  // Format as (XXX) XXX
    }
    // Format as (XXX) XXX-XXXX
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  // This function handles any changes made to the form inputs.
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;  // Get the name and value of the input that was changed.

    if (name === 'phone') {
      const formattedPhoneNumber = formatPhoneNumber(value);  // If the phone number is being changed, format it.
      setFormData({ ...formData, phone: formattedPhoneNumber });  // Update the form data with the formatted phone number.
    } else {
      setFormData({ ...formData, [name]: value });  // Otherwise, update the form data normally.
    }

    // Add a 'has-content' class if the input has value, otherwise remove it.
    if (value !== '') {
      e.target.classList.add('has-content');
    } else {
      e.target.classList.remove('has-content');
    }
  };

  // This function restricts the phone number input to only allow numbers.
  const handlePhoneNumberKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', "Tab"];
    // Prevent any keys that are not numbers or allowed control keys.
    if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  };

  // This function handles form submission when the user clicks the submit button.
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();  // Prevent the default form submission behavior (i.e., refreshing the page).
    if (isFormValid) {
      setIsSubmitting(true);  // Set the submitting state to true if the form is valid.
    }
  };

  // Clears the form data after submission or when needed.
  const clearForm = () => {
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      company: '',
      jobtitle: '',
      statelist: '',
      questions_or_comments: ''
    });
  };

  // Strips formatting from the phone number before sending it to the server.
  const stripPhoneNumberFormatting = (phone: string) => {
    return phone.replace(/[^\d]/g, '');  // Remove all non-numeric characters.
  };

  return (
    <div className="contact-form">
      <div className="contact-form-container" data-aos="fade-up" data-aos-delay="500">
        <h1>See How We Can Help</h1>
        <p>Get more information on how we can help you.</p>
        <br/>
        <form className="contact-form">
          {/* Input for first name */}
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
                required
                className={formData.firstname ? 'has-content' : ''}
              />
              <label htmlFor="firstname">First Name</label>
            </div>
            {/* Input for last name */}
            <div className="form-group">
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
                required
                className={formData.lastname ? 'has-content' : ''}
              />
              <label htmlFor="lastname">Last Name</label>
            </div>
          </div>
          
          {/* Other form fields for email, phone, company, job title, and more */}
          {/* Similar structure for each field with appropriate validation and formatting */}
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className={formData.email ? 'has-content' : ''}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-group">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              onKeyDown={handlePhoneNumberKeyPress}
              required
              className={formData.phone ? 'has-content' : ''}
            />
            <label htmlFor="phone">Phone Number</label>
          </div>
          <div className="form-group">
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              required
              className={formData.company ? 'has-content' : ''}
            />
            <label htmlFor="company">Name of Organization</label>
          </div>
          <div className="form-group">
            <input
              type="text"
              id="jobtitle"
              name="jobtitle"
              value={formData.jobtitle}
              onChange={handleInputChange}
              required
              className={formData.jobtitle ? 'has-content' : ''}
            />
            <label htmlFor="jobtitle">Job Title</label>
          </div>
          <div className="form-group">
            <select
              id="statelist"
              name="statelist"
              value={formData.statelist}
              onChange={handleInputChange}
              required
              className={formData.statelist ? 'has-content' : ''}
            >
              <option value="">Please Select</option>
              <option value="Alabama">Alabama</option>
              <option value="Alaska">Alaska</option>
              <option value="Arizona">Arizona</option>
              <option value="Arkansas">Arkansas</option>
              <option value="California">California</option>
              <option value="Colorado">Colorado</option>
              <option value="Connecticut">Connecticut</option>
              <option value="Delaware">Delaware</option>
              <option value="Florida">Florida</option>
              <option value="Georgia">Georgia</option>
              <option value="Hawaii">Hawaii</option>
              <option value="Idaho">Idaho</option>
              <option value="Illinois">Illinois</option>
              <option value="Indiana">Indiana</option>
              <option value="Iowa">Iowa</option>
              <option value="Kansas">Kansas</option>
              <option value="Kentucky">Kentucky</option>
              <option value="Louisiana">Louisiana</option>
              <option value="Maine">Maine</option>
              <option value="Maryland">Maryland</option>
              <option value="Massachusetts">Massachusetts</option>
              <option value="Michigan">Michigan</option>
              <option value="Minnesota">Minnesota</option>
              <option value="Mississippi">Mississippi</option>
              <option value="Missouri">Missouri</option>
              <option value="Montana">Montana</option>
              <option value="Nebraska">Nebraska</option>
              <option value="Nevada">Nevada</option>
              <option value="New Hampshire">New Hampshire</option>
              <option value="New Jersey">New Jersey</option>
              <option value="New Mexico">New Mexico</option>
              <option value="New York">New York</option>
              <option value="North Carolina">North Carolina</option>
              <option value="North Dakota">North Dakota</option>
              <option value="Ohio">Ohio</option>
              <option value="Oklahoma">Oklahoma</option>
              <option value="Oregon">Oregon</option>
              <option value="Pennsylvania">Pennsylvania</option>
              <option value="Rhode Island">Rhode Island</option>
              <option value="South Carolina">South Carolina</option>
              <option value="South Dakota">South Dakota</option>
              <option value="Tennessee">Tennessee</option>
              <option value="Texas">Texas</option>
              <option value="Utah">Utah</option>
              <option value="Vermont">Vermont</option>
              <option value="Virginia">Virginia</option>
              <option value="Washington">Washington</option>
              <option value="West Virginia">West Virginia</option>
              <option value="Wisconsin">Wisconsin</option>
              <option value="Wyoming">Wyoming</option>
            </select>
            <label htmlFor="statelist">State</label>
          </div>
          <div className="form-group">
            <textarea
              id="questions_or_comments"
              name="questions_or_comments"
              value={formData.questions_or_comments}
              onChange={handleInputChange}
              className={formData.questions_or_comments ? 'has-content' : ''}
            ></textarea>
            <label htmlFor="questions_or_comments">Questions or Comments?</label>
          </div>
          {/* Submit button */}
          <div className="form-group">
            <button
              onClick={handleSubmit}
              className="form-submit-button"
              disabled={!isFormValid || isSubmitting}  // Button is disabled if form is not valid or is submitting.
            >
              {isSubmitting ? 'Submitting...' : 'Submit'} 
            </button>
          </div>
        </form>
        
        {/* Display a temporary message to the user based on the response message */}
        {responseMessage && (
          <TempMsg
            message={responseMessage}
            clearMessage={() => setResponseMessage('')}
            duration={5000}  // Message is displayed for 5 seconds.
            error={false}  // Set to true if you want to display an error message.
          />
        )}
      </div>

      {/* If the form is being submitted, send data using the Communicate component */}
      {isSubmitting && (
        <Communicate
          answer={JSON.stringify({ ...formData, phone: stripPhoneNumberFormatting(formData.phone) })}  // Send the form data, with the phone number stripped of formatting.
          setResponse={(message) => {
            setResponseMessage(message);  // Display response message.
            clearForm();  // Clear the form after submission.
            setIsSubmitting(false);  // Mark submission as complete.
          }}
          setIsSubmitting={setIsSubmitting}
        />
      )}
    </div>
  );
};

export default ContactForm;  // Export the ContactForm component to be used in other parts of the app.