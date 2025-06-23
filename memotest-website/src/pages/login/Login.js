import React, { useState } from 'react';
//import { login } from '../../services/AuthService';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import './Login.css';

const Login = () => {

  const navigate = useNavigate();
  const { login, isLoading } = useAuth();
  
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    console.log('Form submitted:', formData);

    try {
      await login(formData);  
      navigate('/dashboard');
    } catch (error) {
      setError('Invalid email or password');
    }
    //const { data } = await login(formData);
  };

  return (
    <div className="login-container">
      <h1>Sign in to <b>MemoTest</b></h1>

      {error && (
        <Alert severity="error" onClose={() => setError('')}>
          {error}
        </Alert>
      )}
      
      <form onSubmit={handleSubmit} className="login-form">

        {/* Email field */}
        <div className="form-group">
          <label htmlFor="username">Email address</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        
        {/* Password field */}
        <div className="form-group">
          <div className="password-label">
            <label htmlFor="password">Password</label>
            {/*<a href="/forgot-password" className="forgot-password">Forgot password?</a>*/}
          </div>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <button 
          type="submit" 
          className="primary-button signin-button"
          disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Sign in'}
        </button>
      </form>
      {/*
      <div className="divider">
        <span>or</span>
      </div>
      
      <button className="passkey-button">
        Sign in with a passkey
      </button>
      
      <p className="signup-link">
        New to YourApp? <a href="/signup">Create an account</a>
      </p>
      */}
    </div>
  );
};

export default Login;