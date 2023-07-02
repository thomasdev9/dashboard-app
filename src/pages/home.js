import React from 'react';
import styled from 'styled-components';
import Content from '../features/ui/content';
import { Typography } from 'antd';
import CreateCard from '../features/components/create-card';
import { cardsData } from '../shared/setup/home';

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
  return (
    <Content>
      <Title style={{ color: 'rgb(17, 25, 39)' }} level={2}>
        Home
      </Title>
      <CardWrapper>
        {cardsData?.map((card, index) => (
          <CreateCard {...card} key={index} />
        ))}
      </CardWrapper>
    </Content>
  );
}

export default Home;
