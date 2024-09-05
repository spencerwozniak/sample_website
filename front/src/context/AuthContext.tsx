import React, { createContext, useState, useEffect } from 'react';

// Define the shape (or interface) of the AuthContext
interface AuthContextType {
  user: any;  // The user data, could be any type (usually an object).
  login: (userData: any) => void;  // A function to log in a user by passing their data.
  logout: () => void;  // A function to log out the user.
}

// Create the AuthContext with an initial value of 'undefined'
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider component that will wrap the part of the app that needs authentication context
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);  // State to store the current user; initially null (no user logged in).

  useEffect(() => {
    // This useEffect runs when the component mounts (first time it's rendered).
    // It checks if the user is already logged in by making a request to the backend.
    const fetchUser = async () => {
      try {
        // Fetch request to the backend to get user data.
        const response = await fetch('http://localhost:5000/get_user_data', {
          credentials: 'include',  // Include credentials (cookies) in the request.
        });

        if (response.ok) {  // If the response status is OK (200), it means the user is authenticated.
          const userData = await response.json();  // Parse the user data from the response.
          console.log('Fetched user data:', userData);  // Debugging: Log the fetched user data.
          setUser(userData);  // Set the user state with the fetched data.
        } else {
          console.log('Failed to fetch user data:', response.statusText);  // Debugging: Log the error status if fetch fails.
        }
      } catch (error) {
        console.error('Error fetching user data:', error);  // Debugging: Log any errors that occur during the fetch.
      }
    };
    fetchUser();  // Call the fetchUser function when the component mounts.
  }, []);  // Empty dependency array means this effect runs only once, when the component mounts.

  // Function to log in the user
  const login = (userData: any) => {
    console.log('Logging in user:', userData);  // Debugging: Log the user data passed to the login function.
    setUser(userData);  // Set the user state with the logged-in user's data.
  };

  // Function to log out the user
  const logout = async () => {
    try {
      // Send a POST request to the backend to log out the user.
      const response = await fetch('http://localhost:5000/logout', {
        method: 'POST',  // Use the POST method for the logout request.
        credentials: 'include',  // Include credentials (cookies) in the request.
      });

      if (response.ok) {  // If the response status is OK (200), the user was successfully logged out.
        setUser(null);  // Set the user state to null (no user logged in).
        console.log('User logged out successfully');  // Debugging: Log success message.
      } else {
        console.log('Failed to logout user:', response.statusText);  // Debugging: Log the error if the logout fails.
      }
    } catch (error) {
      console.error('Error logging out user:', error);  // Debugging: Log any errors that occur during logout.
    }
  };

  // The AuthProvider component wraps its children and provides the AuthContext values (user, login, logout)
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}  {/* Render the children (the parts of the app that need access to the authentication context) */}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext in any component
export const useAuth = () => {
  const context = React.useContext(AuthContext);  // Get the AuthContext value.
  
  if (context === undefined) {  // If context is undefined, it means this hook is used outside of AuthProvider.
    throw new Error('useAuth must be used within an AuthProvider');  // Throw an error if the hook is misused.
  }

  return context;  // Return the AuthContext value (user, login, logout) to the component that calls useAuth.
};
