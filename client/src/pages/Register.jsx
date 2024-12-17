import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';
import { supabase } from '../supabaseClient';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmpassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Password confirmation check
    if (formData.password !== formData.confirmpassword) {
      setError("Passwords do not match!");
      return;
    }

    // Supabase registration
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setError(error.message);
    } else {
      setSuccess("Registration successful! Check your email to confirm your account.");
      setFormData({ email: '', password: '', confirmpassword: '' }); // Clear form
    }
  }

  function handleLoginClick() {
    navigate('/login');
  }

  return (
    <div className="full-screen-container">
      <div className="inside-container" style={{alignItems: 'center'}}>
        <h2 style={{ marginTop: '0px' }}>
          <span
            role="button"
            onClick={handleLoginClick}
            style={{ color: 'purple', cursor: 'pointer', textDecoration: 'underline' }}
            tabIndex={0}
          >
            Login
          </span>
          {' '}
          or Register
        </h2>

        <form className="loginForm" onSubmit={handleSubmit}>
          <div className="inputGroup">
            <div className="formGroup">
              <label htmlFor="email">Username/Email</label>
              <input
                type="email"
                id="email"
                placeholder='Email'
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
                placeholder='Password'
                name="password"
                value={formData.password}
                onChange={handleFormChange}
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                placeholder='Confirm Password'
                name="confirmpassword"
                value={formData.confirmpassword}
                onChange={handleFormChange}
                required
              />
            </div>
          </div>
          <button type="submit">Register</button>
        </form>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
      </div>
    </div>
  );
};

export default Register;
