import { settingsSchema } from '../schemas';

const initialValues = {
  image: null,
  email: '',
  username: '',
  phone: '',
};

export const settingsData = {
  initialValues: initialValues,
  validationSchema: settingsSchema,
  layout: 'vertical',
  className: 'settings-form',
  submitButton: {
    text: 'Update',
    className: 'settings_submit-button',
  },
  fields: [
    {
      name: 'email',
      label: 'Email',
      type: 'string',
      showValidateSuccess: true,
    },
    {
      name: 'username',
      label: 'Username',
      type: 'string',
      showValidateSuccess: true,
    },
    {
      name: 'phone',
      label: 'Phone',
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
