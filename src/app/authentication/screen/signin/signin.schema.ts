import * as yup from 'yup';

export const schema = yup.object().shape({
  username: yup.string().required('Email is required'),
  password: yup.string().required('Password is required'),
});
