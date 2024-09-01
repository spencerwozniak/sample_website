import AOS from 'aos';
import 'aos/dist/aos.css';

import React, { useState, useEffect } from 'react';
import Communicate from '../components/Communicate'; // Import the Communicate component
import TempMsg from '../items/TempMsg'; // Import the TempMsg component
import './ContactForm.css';

const ContactForm: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    company: '',
    jobtitle: '',
    statelist: '',
    questions_or_comments: ''
  });

  const [responseMessage, setResponseMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    const isValid =
      formData.firstname &&
      formData.lastname &&
      formData.email &&
      formData.phone &&
      formData.company &&
      formData.jobtitle &&
      formData.statelist;
    setIsFormValid(isValid);
  }, [formData]);

  const formatPhoneNumber = (value: string) => {
    if (!value) return value;

    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const formattedPhoneNumber = formatPhoneNumber(value);
      setFormData({ ...formData, phone: formattedPhoneNumber });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (value !== '') {
      e.target.classList.add('has-content');
    } else {
      e.target.classList.remove('has-content');
    }
  };

  const handlePhoneNumberKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', "Tab"];
    if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (isFormValid) {
      setIsSubmitting(true);
    }
  };

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

  const stripPhoneNumberFormatting = (phone: string) => {
    return phone.replace(/[^\d]/g, '');
  };

  return (
    <div className="contact-form">
      <div className="contact-form-container" data-aos="fade-up" data-aos-delay="500">
        <h1>See How We Can Help</h1>
        <p>Get more information on how we can help you.</p>
        <br/>
        <form className="contact-form">
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
          <div className="form-group">
            <button
              onClick={handleSubmit}
              className="form-submit-button"
              disabled={!isFormValid || isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
        {responseMessage && (
          <TempMsg
            message={responseMessage}
            clearMessage={() => setResponseMessage('')}
            duration={5000}
            error={false} // Set to true if you want to display an error message
          />
        )}
      </div>
      {isSubmitting && (
        <Communicate
          answer={JSON.stringify({ ...formData, phone: stripPhoneNumberFormatting(formData.phone) })}
          setResponse={(message) => {
            setResponseMessage(message);
            clearForm();
            setIsSubmitting(false);
          }}
          setIsSubmitting={setIsSubmitting}
        />
      )}
    </div>
  );
};

export default ContactForm;
