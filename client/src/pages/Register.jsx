import React from 'react';
import '../index.css';

function Register() {
  return (
    <div className="register-container">
      <h1>Create an Account</h1>
      <form className="register-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="register-button">Register</button>
      </form>
      <p className="redirect-message">
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
}

export default Register;
