import { customerSchema } from '../schemas';

const initialValues = {
  name: '',
  email: '',
  address: '',
  phone: '',
};

export const editCustomerData = {
  initialValues: initialValues,
  validationSchema: customerSchema,
  layout: 'vertical',
  className: 'edit-customer-form',
  submitButton: {
    text: 'Edit Customer',
    className: 'edit-customer_submit-button',
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
