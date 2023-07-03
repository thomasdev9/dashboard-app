import { orderSchema } from '../schemas';

const initialValues = {
  id: '',
  price: 0.0,
  address: '',
};

export const formData = {
  initialValues: initialValues,
  validationSchema: orderSchema,
  layout: 'vertical',
  className: 'add-form',
  submitButton: {
    text: 'Add Order',
    className: 'add-form__submit-button',
  },
  fields: [
    {
      name: 'id',
      label: 'Id',
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
      name: 'address',
      label: 'Address',
      type: 'string',
      showValidateSuccess: true,
    },
  ],
};
