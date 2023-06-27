import React from 'react';
import Content from '../features/ui/content';
import { Typography } from 'antd';

const { Title } = Typography;

function Home() {
  return (
    <Content>
      <Title style={{ color: 'rgb(17, 25, 39)' }} level={2}>
        Home
      </Title>
    </Content>
  );
}

export default Home;
