import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { signup } from '../services/auth';

const SignupForm = () => {
  const history = useHistory();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await signup(values.username, values.password);
      history.push('/login');
    } catch (error) {
      console.error('Signup error:', error);
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
          <label htmlFor
