import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const TodoForm = ({ addTodo }) => {
	const formik = useFormik({
		initialValues: { task: '' },
		validationSchema: Yup.object({
			task: Yup.string()
				.min(5, 'Мінімальна довжина 5 символів')
				.required('Обов’язкове поле'),
		}),
		onSubmit: (values, { resetForm }) => {
			addTodo(values.task);
			resetForm();
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<input
				type='text'
				name='task'
				value={formik.values.task}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				placeholder='Введіть завдання'
			/>
			{formik.touched.task && formik.errors.task ? (
				<div className='error'>{formik.errors.task}</div>
			) : null}
			<button type='submit'>Додати</button>
		</form>
	);
};

export default TodoForm;
