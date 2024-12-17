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

  return (
    <div className="full-screen-container">
      <div className="inside-container" style={{alignItems: 'center'}}>
        <h2 style={{ marginTop: '0px' }}>
          Login or
          {' '}
          <span
            role="button"
            onClick={handleRegisterClick}
            style={{ color: 'purple', cursor: 'pointer', textDecoration: 'underline' }}
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
      </div>
    </div>
  );
};

export default Login;

