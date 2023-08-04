import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(null); // Add this state for the image

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform form validation (e.g., check for empty fields)
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    try {
      // Assuming you have a server endpoint for authentication
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
      formData.append('profilePicture', profilePicture); // Append the image file to the FormData

      const response = await fetch('/api/login', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        // Authentication successful, redirect to the dashboard or other page
        history.push('/home');
      } else {
        // Authentication failed, display an error message
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
    <>
      {/* Your login page content goes here */}
      <div className="bg-gray-10 flex justify-center h-screen w-screen items-center">
        <div className="w-full md:w-1/2 flex flex-col items-center">
          {/* text login */}
          <h1 className="text-center text-2xl font-bold text-gray-600 mb-6">LOGIN</h1>
          {/* email input */}
          <div className="w-3/4 mb-6">
            <input
              type="email"
              name="email"
              id="email"
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
              placeholder="User Name"
            />
          </div>
          {/* password input */}
          <div className="w-3/4 mb-6">
            <input
              type="password"
              name="password"
              id="password"
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
              placeholder="Password"
            />
          </div>
          {/* remember input */}
          <div className="w-3/4 flex flex-row justify-between">
            <div className="flex items-center gap-x-1">
              <input type="checkbox" name="remember" id="" className="w-4 h-4" />
              <label htmlFor="" className="text-sm text-slate-400">
                Remember me
              </label>
            </div>
            <div>
              <a href="#" className="text-sm text-slate-400 hover:text-blue-500">
                Forgot?
              </a>
            </div>
          </div>
          {/* button */}
          <div className="w-3/4 mt-4">
            <button
              type="submit"
              className="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700"
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
