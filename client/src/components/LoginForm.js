import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../services/auth';

const LoginForm = () => {
  const history = useHistory();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await login(values.username, values.password);
      localStorage.setItem('token', response.access_token);
      history.push('/blogs');
    } catch (error) {
      console.error('Login error:', error);
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.username) {
          errors.username = 'Required';
        }
        if (!values.password) {
          errors.password = 'Required';
        }
        return errors;
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="username">Username</label>
          <Field type="text" id="username" name="username" />
          <ErrorMessage name="username" component="div" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </div>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
