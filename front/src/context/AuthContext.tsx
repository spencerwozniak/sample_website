import React, { createContext, useState, useEffect } from 'react';

interface AuthContextType {
  user: any;
  login: (userData: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Check if the user is logged in by making a request to your backend
    const fetchUser = async () => {
      try {
        const response = await fetch('http://localhost:5000/get_user_data', {
          credentials: 'include',
        });
        if (response.ok) {
          const userData = await response.json();
          console.log('Fetched user data:', userData); // Debugging line
          setUser(userData);
        } else {
          console.log('Failed to fetch user data:', response.statusText); // Debugging line
        }
      } catch (error) {
        console.error('Error fetching user data:', error); // Debugging line
      }
    };
    fetchUser();
  }, []);

  const login = (userData: any) => {
    console.log('Logging in user:', userData); // Debugging line
    setUser(userData);
  };

  const logout = async () => {
    try {
      const response = await fetch('http://localhost:5000/logout', {
        method: 'POST',
        credentials: 'include',
      });
      if (response.ok) {
        setUser(null);
        console.log('User logged out successfully'); // Debugging line
      } else {
        console.log('Failed to logout user:', response.statusText); // Debugging line
      }
    } catch (error) {
      console.error('Error logging out user:', error); // Debugging line
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
