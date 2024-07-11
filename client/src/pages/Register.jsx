import React from 'react';
import { useHistory } from 'react-router-dom';
import '../index.css';

function Register() {
  const history = useHistory();

  const handleRegister = (event) => {
    event.preventDefault();
    // Perform registration logic here, e.g., API call
    
    // Redirect to articles page after successful registration
    history.push('/articles');
  };

  return (
    <div className="register-container">
      <h1>Create an Account</h1>
      <form className="register-form" onSubmit={handleRegister}>
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
