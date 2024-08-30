import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import the useAuth hook
import TempMsg from '../items/TempMsg'; // Import TempMsg
import Navigation from '../items/Navigation';
import './AccountForm.css';  // Import the form styles

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // State for error message
  const { user, login } = useAuth(); // Destructure user and login from useAuth
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/profile'); // Redirect to profile if user is already logged in
    }
  }, [user, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, setValue: React.Dispatch<React.SetStateAction<string>>) => {
    setValue(e.target.value);
    if (e.target.value !== '') {
      e.target.classList.add('has-content');
    } else {
      e.target.classList.remove('has-content');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      setPassword(''); // Clear password input
      setConfirmPassword(''); // Clear confirm password input
      return;
    }
    const response = await fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
    });
    const data = await response.json();
    if (response.status === 201) {
      login(data.user); // Automatically log in the user upon successful registration
      navigate('/profile'); // Redirect to the profile page
    } else {
      setErrorMessage(data.message); // Set error message
      setUsername(''); // Clear username input
      setEmail(''); // Clear email input
      setPassword(''); // Clear password input
      setConfirmPassword(''); // Clear confirm password input
    }
  };

  return (
    <div className="login-box">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="user-box">
          <input
            type="text"
            value={username}
            onChange={(e) => handleInputChange(e, setUsername)}
            required
            className={username ? 'has-content' : ''}
          />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input
            type="email"
            value={email}
            onChange={(e) => handleInputChange(e, setEmail)}
            required
            className={email ? 'has-content' : ''}
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            value={password}
            onChange={(e) => handleInputChange(e, setPassword)}
            required
            className={password ? 'has-content' : ''}
          />
          <label>Password</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => handleInputChange(e, setConfirmPassword)}
            required
            className={confirmPassword ? 'has-content' : ''}
          />
          <label>Confirm Password</label>
        </div>
        <button type="submit" className="submit-button"><span>Register</span></button>
      </form>
      {errorMessage && <TempMsg message={errorMessage} clearMessage={() => setErrorMessage(null)} error={true} />}
      <Navigation style={1} />
    </div>
  );
};

export default RegisterPage;
