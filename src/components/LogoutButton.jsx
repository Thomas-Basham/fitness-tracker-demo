import React from 'react';
import { logout } from '../../firebase-auth-utility';

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      await logout();
      console.log('Logged out successfully');
      // Handle successful logout (e.g., navigate to login page)
    } catch (error) {
      console.error('Logout failed:', error.message);
      // Handle logout errors (e.g., show error message)
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
