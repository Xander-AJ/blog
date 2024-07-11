import React from 'react';
import '../index.css'

function Register() {
  return (
    <div>
      <h1>Register Page</h1>
      <form>
        <label>Username:</label>
        <input type="text" name="username" required />
        <label>Email:</label>
        <input type="email" name="email" required />
        <label>Password:</label>
        <input type="password" name="password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
