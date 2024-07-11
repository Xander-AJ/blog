import React from 'react';
import { useHistory } from 'react-router-dom';
import '../index.css';

function Login() {
  const history = useHistory();

  const handleLogin = (event) => {
    event.preventDefault();
    // Perform login logic here, e.g., API call
    
    // Redirect to articles page after successful login
    history.push('/articles');
  };

  return (
    <div className="login-container">
      <h1>Login to ProBlog</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="redirect-message">
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
}

export default Login;
