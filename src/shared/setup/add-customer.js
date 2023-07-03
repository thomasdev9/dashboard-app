import { customerSchema } from '../schemas';

const initialValues = {
  title: '',
  image: '',
  price: 0.0,
  category: '',
};

export const formData = {
  initialValues: initialValues,
  validationSchema: customerSchema,
  layout: 'vertical',
  className: 'add-customer-form',
  submitButton: {
    text: 'Add Customer',
    className: 'add-customer_submit-button',
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'string',
      showValidateSuccess: true,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'string',
      showValidateSuccess: true,
    },
    {
      name: 'address',
      label: 'Address',
      type: 'string',
      showValidateSuccess: true,
    },
    {
      name: 'phone',
      label: 'Phone',
      type: 'string',
      showValidateSuccess: true,
    },
  ],
};
