import React from 'react';
import Content from '../features/ui/content';
import { Typography, Card, message } from 'antd';
import CreateForm from '../features/components/create-form';
import { formData } from '../shared/setup/add-order';
import { OrdersAPI } from '../api/orders-api';
import { format } from 'date-fns';

const { Title } = Typography;

function AddOrder() {
  const handleSubmit = (values, { resetForm }) => {
    const currentDate = new Date();
    const date = format(currentDate, 'dd/MM/yyyy');
    OrdersAPI.addOrder({ data: { ...values, date } }).then((res) => {
      resetForm({ values: '' });
      if (res?.id) {
        message.success('Order added successfully!');
      } else {
        message.error('There was a problem adding the order');
      }
    });
  };

  return (
    <Content>
      <Title style={{ color: 'rgb(17, 25, 39)' }} level={2}>
        Add Order
      </Title>
      <Card title="Order Data">
        <CreateForm {...formData} handleSubmit={handleSubmit} />
      </Card>
    </Content>
  );
}

export default AddOrder;
