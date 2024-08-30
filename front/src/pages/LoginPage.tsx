import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import TempMsg from '../items/TempMsg'; // Import TempMsg
import Navigation from '../items/Navigation';
import './AccountForm.css';  // Import the form styles
import '../index.css'

const LoginPage: React.FC = () => {
  const [identifier, setIdentifier] = useState(''); // Combined input for email/username
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // State for error message
  const { user, login } = useAuth(); // Destructure user and login from useAuth
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as { from: { pathname: string } })?.from?.pathname || '/profile';

  useEffect(() => {
    if (user) {
      navigate(from); // Redirect to profile if user is already logged in
    }
  }, [user, navigate, from]);

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
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identifier, password }), // Using identifier for email/username
      credentials: 'include',
    });
    const data = await response.json();
    if (response.status === 200) {
      login(data.user); // Make sure to pass the correct user data
      navigate(from);
    } else {
      setErrorMessage(data.message); // Set error message
      setIdentifier(''); // Clear identifier input
      setPassword(''); // Clear password input
    }
  };

  return (
    <div className="login-box">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="user-box">
          <input
            type="text"
            value={identifier}
            onChange={(e) => handleInputChange(e, setIdentifier)}
            required
            className={identifier ? 'has-content' : ''}
          />
          <label>Username or Email</label>
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
        <button type="submit" className="submit-button"><span>Login</span></button>
      </form>
      {errorMessage && <TempMsg message={errorMessage} clearMessage={() => setErrorMessage(null)} error={true} />}
      <Navigation style={1} />
    </div>
  );
};

export default LoginPage;
