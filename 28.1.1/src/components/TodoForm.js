import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const TodoForm = ({ addTodo }) => {
  const formik = useFormik({
    initialValues: {
      task: '',
    },
    validationSchema: Yup.object({
      task: Yup.string()
        .min(5, 'Task must be at least 5 characters long')
        .required('Task is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      addTodo(values.task);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="form-group">
      <input
        type="text"
        name="task"
        className={form-control ${formik.errors.task && formik.touched.task ? 'is-invalid' : ''}}
        placeholder="Enter your task"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.task}
      />
      {formik.errors.task && formik.touched.task && (
        <div className="invalid-feedback">{formik.errors.task}</div>
      )}
      <button type="submit" className="btn btn-primary mt-3 w-100">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;