import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient"; // Import Supabase client
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  // Update form data state
  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  }

  // Handle form submission and Supabase login
  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    // Supabase login
    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setError(error.message); // Display error message
    } else {
      navigate('/'); // Redirect to the home page after login
    }
  }

  // Navigate to Register page
  function handleRegisterClick() {
    navigate('/register');
  }

  // Social Login Functionality
  const handleSocialLogin = async (provider) => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
    });

    if (error) {
      setError(error.message); // Display error message
    }
  };

  return (
    <div className="full-screen-container">
      <div className="inside-container" style={{ color: 'white', alignItems: 'center' }}>
        <h2 style={{ color: 'Black', marginTop: '0px' }}>
          Login or
          {' '}
          <span
            role="button"
            onClick={handleRegisterClick}
            style={{ color: 'Purple', cursor: 'pointer', textDecoration: 'underline' }}
            tabIndex={0} // Make it focusable
          >
            Register
          </span>
        </h2>

        {/* Login Form */}
        <form className="loginForm" onSubmit={handleSubmit}>
          <div className="inputGroup">
            <div className="formGroup">
              <label htmlFor="email">Username/Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleFormChange}
                required
              />
            </div>
          </div>
          <button type="submit">Log in</button>
          {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        </form>

        {/* Social Login Buttons */}
        <h3 style={{ marginTop: "20px", color: "black" }}>Or Sign In With:</h3>
        <div className="social-login-buttons">
          <button className="github" onClick={() => handleSocialLogin("github")}>GitHub</button>
          <button className="linkedin" onClick={() => handleSocialLogin("linkedin")}>LinkedIn</button>
          <button className="discord" onClick={() => handleSocialLogin("discord")}>Discord</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
