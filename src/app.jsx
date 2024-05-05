import { useEffect, useRef } from 'react';
import styles from './app.module.css';
import { TextField } from './Components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { registrationFormSchema } from './validateShema-React-Hook-Form&Yup';

export const App = () => {
	const {
		register,
		handleSubmit,
		trigger,
		formState: { touchedFields, isValid, errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
			passcheck: '',
		},
		resolver: yupResolver(registrationFormSchema),
		mode: 'onTouched',
	});

	const submitButtonRef = useRef(null);

	const onSubmit = ({ email, password }) => {
		console.log({ email, password });
	};

	useEffect(() => {
		if (isValid) {
			submitButtonRef.current.focus();
		}
	}, [isValid]);

	return (
		<div className={styles.app}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<TextField
					label={'Email'}
					type="text"
					error={errors.email?.message}
					{...register('email')}
				/>

				<TextField
					label={'Password'}
					type="password"
					error={errors.password?.message}
					{...register('password', {
						onChange: () => touchedFields.passcheck && trigger('passcheck'),
					})}
				/>

				<TextField
					label={'CheckPassword'}
					type="password"
					error={errors.passcheck?.message}
					{...register('passcheck')}
				/>
				<button
					className={styles.btn}
					disabled={!isValid}
					ref={submitButtonRef}
					type="submit"
				>
					Отправить
				</button>
			</form>
		</div>
	);
};
