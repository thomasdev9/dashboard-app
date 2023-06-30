import * as yup from 'yup';

export const addProductSchema = yup.object().shape({
  title: yup
    .string()
    .min(2, 'Must contain at least 2 characters')
    .max(20, 'Must contain a maximum of 20 characters')
    .required('Required'),
  price: yup.number().positive('Must be positive number').required('Required'),
  category: yup
    .string()
    .min(2, 'Must contain at least 2 characters')
    .max(20, 'Must contain a maximum of 20 characters')
    .required('Required'),
  image: yup.mixed().required('Required'),
});
