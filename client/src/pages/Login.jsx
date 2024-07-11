import React from 'react';
import '../index.css'

function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label>Email:</label>
        <input type="email" name="email" required />
        <label>Password:</label>
        <input type="password" name="password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
