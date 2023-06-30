import * as yup from 'yup';

// const FILE_SIZE = 160 * 1024;

// const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];

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
  //   image: yup
  //     .mixed()
  //     .test('fileSize', 'File size exceeds limit', (value) => value && value.size <= FILE_SIZE)
  //     .test('fileFormat', 'The file must be an image format', (value) => value && SUPPORTED_FORMATS.includes(value.type)),
});
