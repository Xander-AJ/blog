import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { postData } from '../services/api';

const CommentForm = ({ articleId, token }) => {
  const formik = useFormik({
    initialValues: {
      content: ''
    },
    validationSchema: Yup.object({
      content: Yup.string().required('Required')
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await postData(`/comments`, { ...values, article_id: articleId }, token);
        resetForm();
      } catch (error) {
        console.error('Error creating comment:', error);
      }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="content">Comment</label>
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

export default CommentForm;
