import * as Yup from 'yup';

export const FormRegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalidg email format')
    .required('Email is required'),
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});
