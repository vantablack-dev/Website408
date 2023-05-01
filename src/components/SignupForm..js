import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
  const initialValues = { firstName: '', lastName: '', email: '', password: '' };
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().min(3, 'Ім’я повинне бути не менше 3 символів').required('Це поле є обов’язковим'),
    lastName: Yup.string().max(40, 'Прізвище не повинне бути більше 40 символів').required('Це поле є обов’язковим'),
    email: Yup.string().email('Некоректна електронна пошта').required('Це поле є обов’язковим'),
    password: Yup.string()
      .matches(/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/, 'Пароль повинен містити принаймні 8 символів, 1 велику літеру, 1 маленьку літеру, 1 цифру та 1 спеціальний символ')
      .required('Це поле є обов’язковим'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label>Ім’я</label>
            <Field name="firstName" />
            <ErrorMessage name="firstName" />
          </div>
          <div>
        <label>Прізвище</label>
        <Field name="lastName" />
        <ErrorMessage name="lastName" />
      </div>
      <div>
        <label>Email</label>
        <Field name="email" />
        <ErrorMessage name="email" />
      </div>
      <div>
        <label>Пароль</label>
        <Field type="password" name="password" />
        <ErrorMessage name="password" />
      </div>
      <button type="submit" disabled={isSubmitting}>
        Зареєструватися
      </button>
    </Form>
  )}
</Formik>
);
};

export default SignupForm;
