import React from 'react';
import Content from '../features/ui/content';
import { Typography, Card, message } from 'antd';
import CreateForm from '../features/components/create-form';
import { formData } from '../shared/setup/add-customer';
import { CustomersAPI } from '../api/customers-api';

const { Title } = Typography;

function AddCustomer() {
  const handleSubmit = (values, { resetForm }) => {
    CustomersAPI.addCustomer({ data: { ...values } }).then((res) => {
      resetForm({ values: '' });
      if (res?.id) {
        message.success('Customer added successfully!');
      } else {
        message.error('There was a problem adding the customer');
      }
    });
  };

  return (
    <Content>
      <Title style={{ color: 'rgb(17, 25, 39)' }} level={2}>
        Add Customer
      </Title>
      <Card title="Customer Data">
        <CreateForm {...formData} handleSubmit={handleSubmit} />
      </Card>
    </Content>
  );
}

export default AddCustomer;
