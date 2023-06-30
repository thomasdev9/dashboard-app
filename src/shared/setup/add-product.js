import { addProductSchema } from '../schemas';

const initialValues = {
  title: '',
  image: '',
  price: 0.0,
  category: '',
};

export const formData = {
  initialValues: initialValues,
  validationSchema: addProductSchema,
  layout: 'vertical',
  className: 'add-product-form',
  submitButton: {
    text: 'Add Product',
    className: 'add-product_submit-button',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'string',
      showValidateSuccess: true,
    },
    {
      name: 'price',
      label: 'Price',
      step: '0.1',
      type: 'number',
      showValidateSuccess: true,
    },
    {
      name: 'category',
      label: 'Category',
      type: 'string',
      showValidateSuccess: true,
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload-image',
    },
  ],
};
