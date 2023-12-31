import * as yup from 'yup';

export const productSchema = yup.object().shape({
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

export const customerSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Must contain at least 2 characters')
    .max(20, 'Must contain a maximum of 20 characters')
    .required('Required'),
  email: yup.string().email('Email must be valid').required('Required'),
  address: yup
    .string()
    .min(2, 'Must contain at least 2 characters')
    .max(20, 'Must contain a maximum of 20 characters')
    .required('Required'),
  phone: yup
    .string()
    .min(14, 'Must be exactly 14 characters')
    .max(14, 'Must be exactly 14 characters')
    .required('Required'),
});

export const settingsSchema = yup.object().shape({
  email: yup.string().email('Email must be valid').required('Required'),
  username: yup
    .string()
    .min(2, 'Must contain at least 2 characters')
    .max(20, 'Must contain a maximum of 20 characters')
    .required('Required'),
  phone: yup.string().min(14, 'Must be exactly 14 characters').max(14, 'Must be exactly 14 characters'),
  image: yup.mixed().required('Required'),
});

export const orderSchema = yup.object().shape({
  id: yup
    .string()
    .min(4, 'Must contain at least 2 characters')
    .max(8, 'Must contain a maximum of 20 characters')
    .required('Required'),
  price: yup.number().positive('Must be positive number').required('Required'),
  address: yup
    .string()
    .min(2, 'Must contain at least 2 characters')
    .max(40, 'Must contain a maximum of 40 characters')
    .required('Required'),
});
