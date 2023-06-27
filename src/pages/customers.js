import Content from '../features/ui/content';
import { Typography } from 'antd';

const { Title } = Typography;

function Customers() {
  return (
    <Content>
      <Title style={{ color: 'rgb(17, 25, 39)' }} level={2}>
        Customers
      </Title>
    </Content>
  );
}

export default Customers;
