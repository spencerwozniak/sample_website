import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navigation from '../items/Navigation';
import TempMsg from '../items/TempMsg';
import './ProfilePage.css';

const ProfilePage: React.FC = () => {
  const { user, logout, login } = useAuth();
  const [username, setUsername] = useState(user?.username || '');
  const [email, setEmail] = useState(user?.email || '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [message, setMessage] = useState('');
  const [hasChanges, setHasChanges] = useState(false);
  const [confirmUpdateProfile, setConfirmUpdateProfile] = useState(false);
  const [confirmDeleteAccount, setConfirmDeleteAccount] = useState(false);
  const [fetchedUser, setFetchedUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch('http://localhost:5000/get_user_data', {
        credentials: 'include',
      });
      if (response.ok) {
        const userData = await response.json();
        login(userData);
      }
      setFetchedUser(true);
    };

    if (!fetchedUser) {
      fetchUserData();
    }
  }, [login, fetchedUser]);

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setEmail(user.email);
    }
  }, [user]);

  useEffect(() => {
    if (username !== user?.username || email !== user?.email) {
      setHasChanges(true);
    } else {
      setHasChanges(false);
    }
  }, [username, email, user]);

  const handleDeleteAccount = async () => {
    const response = await fetch('http://localhost:5000/delete_account', {
      method: 'DELETE',
      credentials: 'include',
    });
    if (response.ok) {
      logout();
      navigate('/'); // Redirect to home page after logout
    } else {
      setMessage('Failed to delete account');
    }
  };

  const handleUpdateProfile = async () => {
    const response = await fetch('http://localhost:5000/update_profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ username, email }),
    });
    const data = await response.json();
    if (response.ok) {
      setMessage('Profile updated successfully');
      login(data.user); // Update user context
      setHasChanges(false);
      setConfirmUpdateProfile(false);
    } else {
      setMessage(data.message);
    }
  };

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    const response = await fetch('http://localhost:5000/change_password', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ currentPassword, newPassword }),
    });
    if (response.ok) {
      setMessage('Password changed successfully');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setShowChangePassword(false);
    } else {
      const data = await response.json();
      setMessage(data.message || 'Failed to change password');
    }
  };

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>, value: string) => {
    setter(value);
    if (confirmUpdateProfile) {
      setConfirmUpdateProfile(false);
    }
  };

  if (!user) {
    return (
      <div className="profile-page">
        <h2>You do not have a profile.</h2>
        <Navigation />
      </div>
    );
  }

  return (
    <div className="profile-page">
      <Navigation />
      <h1>Profile</h1>
      {message && <TempMsg message={message} clearMessage={() => setMessage('')} error={true} />}
      <div className="form-group">
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => handleInputChange(setUsername, e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => handleInputChange(setEmail, e.target.value)}
        />
      </div>
      {hasChanges && (
        <div className="button-group">
          {confirmUpdateProfile ? (
            <>
              <button onClick={handleUpdateProfile} className="confirm-button">Confirm</button>
              <button onClick={() => setConfirmUpdateProfile(false)} className="cancel-button">Cancel</button>
            </>
          ) : (
            <button onClick={() => setConfirmUpdateProfile(true)} className="update-button">Update Profile</button>
          )}
        </div>
      )}
      <h2>Courses</h2>
      <pre className="course-list">{JSON.stringify(user.courses, null, 2)}</pre>
      <div className="password-section">
        <h2>Change Password</h2>
        {showChangePassword && (
          <>
            <input
              type="password"
              placeholder="Current Password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </>
        )}
        <button
          onClick={showChangePassword ? (currentPassword && newPassword && confirmPassword ? handleChangePassword : () => setShowChangePassword(false)) : () => setShowChangePassword(true)}
          className="change-password-button"
        >
          {showChangePassword ? (currentPassword && newPassword && confirmPassword ? 'Confirm Change' : 'Cancel') : 'Change Password'}
        </button>
      </div>
      <div className="delete-account-section">
        <h2>Delete Account</h2>
        {confirmDeleteAccount ? (
          <div className="button-group">
            <button onClick={handleDeleteAccount} className="confirm-button">Confirm</button>
            <button onClick={() => setConfirmDeleteAccount(false)} className="cancel-button">Cancel</button>
          </div>
        ) : (
          <button onClick={() => setConfirmDeleteAccount(true)} className="delete-button">Delete Account</button>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
