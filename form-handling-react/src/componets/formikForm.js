import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return React.createElement(
    Formik,
    {
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit: onSubmit
    },
    ({ isSubmitting }) => React.createElement(
      Form,
      null,
      React.createElement(
        'div',
        null,
        React.createElement('label', null, 'Name:'),
        React.createElement(Field, { type: 'text', name: 'name' }),
        React.createElement(ErrorMessage, { name: 'name', component: 'div' })
      ),
      React.createElement(
        'div',
        null,
        React.createElement('label', null, 'Email:'),
        React.createElement(Field, { type: 'email', name: 'email' }),
        React.createElement(ErrorMessage, { name: 'email', component: 'div' })
      ),
      React.createElement(
        'div',
        null,
        React.createElement('label', null, 'Password:'),
        React.createElement(Field, { type: 'password', name: 'password' }),
        React.createElement(ErrorMessage, { name: 'password', component: 'div' })
      ),
      React.createElement(
        'button',
        { type: 'submit', disabled: isSubmitting },
        'Submit'
      )
    )
  );
};

export default FormikForm;
