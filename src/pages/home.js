import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Content from '../features/ui/content';
import { Typography } from 'antd';
import CreateCard from '../features/components/create-card';
import { cardsData } from '../shared/setup/home';
import { fetchProducts } from '../redux/slices/products';
import { fetchCustomers } from '../redux/slices/customers';
import { fetchOrders } from '../redux/slices/orders';

const CardWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;

  @media only screen and (max-width: 850px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

const { Title } = Typography;

function Home() {
  const dispatch = useDispatch();
  const actions = [fetchCustomers(), fetchOrders(), fetchProducts()];
  const orders = useSelector((state) => state.orders.data);
  const customers = useSelector((state) => state.customers.data);
  const products = useSelector((state) => state.products.data);

  const getValue = (index) => {
    switch (index) {
      case 0:
        return customers?.length;
      case 1:
        return orders?.length;
      default:
        return products?.length;
    }
  };

  useEffect(() => {
    actions?.map((action) => dispatch(action));
  }, []);

  return (
    <Content>
      <Title style={{ color: 'rgb(17, 25, 39)' }} level={2}>
        Home
      </Title>
      <CardWrapper>
        {cardsData?.map((card, index) => (
          <CreateCard {...card} key={index} value={getValue(index)} />
        ))}
      </CardWrapper>
    </Content>
  );
}

export default Home;
