import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { postData } from '../services/api';

const ArticleForm = ({ token }) => {
  const formik = useFormik({
    initialValues: {
      title: '',
      content: ''
    },
    validationSchema: Yup.object({
      title: Yup.string().max(100, 'Must be 100 characters or less').required('Required'),
      content: Yup.string().required('Required')
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await postData('/articles', values, token);
        resetForm();
      } catch (error) {
        console.error('Error creating article:', error);
      }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
      />
      {formik.touched.title && formik.errors.title ? <div>{formik.errors.title}</div> : null}

      <label htmlFor="content">Content</label>
      <textarea
        id="content"
        name="content"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.content}
      />
      {formik.touched.content && formik.errors.content ? <div>{formik.errors.content}</div> : null}

      <button type="submit">Submit</button>
    </form>
  );
};

export default ArticleForm;
