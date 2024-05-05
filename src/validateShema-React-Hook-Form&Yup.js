import * as yup from 'yup';

export const registrationFormSchema = yup.object().shape({
	email: yup.string().required('Заполните почту').email('Email введен неверно'),
	password: yup
		.string()
		.required('Заполните пароль')
		.min(6, 'Пароль должен быть не менее 6 символов')
		.max(10, 'Максимальное кол-во символов 10')
		.matches(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])/, 'Пароль должен состоять из букв, цифр и символов'),
	passcheck: yup
		.string()
		.required('Заполните повтор пароля')
		.oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
});
