import React from 'react';
import { Form, FormItem, Input, InputNumber, SubmitButton } from 'formik-antd';
import UploadImage from './upload-image';
import { Formik } from 'formik';

function CreateForm({ fields, initialValues, validationSchema, className, layout, submitButton, handleSubmit }) {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ setFieldValue, values }) => (
        <Form layout={layout} className={className}>
          {fields?.map((field) => {
            switch (field.type) {
              case 'string':
                return (
                  <FormItem name={field.name} label={field.label} showValidateSuccess={field.showValidateSuccess}>
                    <Input name={field.name} />
                  </FormItem>
                );
              case 'number':
                return (
                  <FormItem name={field.name} label={field.label} showValidateSuccess={field.showValidateSuccess}>
                    <InputNumber name={field.name} step={field?.step} style={field?.style} />
                  </FormItem>
                );
              case 'upload-image':
                return (
                  <FormItem name={field.name} label={field.label}>
                    <UploadImage setFieldValue={setFieldValue} values={values} />
                  </FormItem>
                );
              default:
                return (
                  <FormItem name={field.name} label={field.label} showValidateSuccess={field.showValidateSuccess}>
                    <Input name={field.name} type={field.type} />
                  </FormItem>
                );
            }
          })}
          <SubmitButton className={submitButton.className} disabled={false}>
            {submitButton.text}
          </SubmitButton>
        </Form>
      )}
    </Formik>
  );
}

export default CreateForm;
