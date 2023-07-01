import { addProductSchema } from '../schemas';

const initialValues = {
  image: null,
  title: '',
  price: 0.0,
  category: '',
};

export const editProductData = {
  initialValues: initialValues,
  validationSchema: addProductSchema,
  layout: 'vertical',
  className: 'edit-product-form',
  submitButton: {
    text: 'Edit Product',
    className: 'edit-customer_submit-button',
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
      showValidateSuccess: true,
    },
  ],
};
