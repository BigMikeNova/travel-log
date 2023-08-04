import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform form validation (e.g., check for empty fields)
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    try {
      // Assuming you have a server endpoint for user registration
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
      formData.append('profilePicture', profilePicture);

      const response = await fetch('/api/register', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        // Registration successful, redirect to the login page or other page
        history.push('/login');
      } else {
        // Registration failed, display an error message
        alert(data.message);
      }
    } catch (error) {
      // Handle any network or server-side errors
      console.error('Error occurred:', error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* email input */}
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {/* password input */}
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {/* profile picture input */}
      <div>
        <label htmlFor="profilePicture">Profile Picture:</label>
        <input
          type="file"
          name="profilePicture"
          onChange={(e) => handleImageChange(e)}
        />
      </div>
      {/* submit button */}
      <button type="submit">Register</button>
    </form>
  );
};

export default Registration;
