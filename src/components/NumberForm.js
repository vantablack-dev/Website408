import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const NumberForm = () => {
  const initialValues = { number: '' };
  const validationSchema = Yup.object().shape({
    number: Yup.number()
      .min(10, 'Число повинне бути не менше 10')
      .max(100, 'Число повинне бути не більше 100')
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
            <label>Число</label>
            <Field type="number" name="number" />
            <ErrorMessage name="number" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Перевірити
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default NumberForm;
